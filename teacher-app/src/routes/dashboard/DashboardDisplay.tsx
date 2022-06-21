import { useParams } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import { MouseEvent, useMemo } from "react";
import { QuestionMetadataType } from "../../api";
import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import { StudentType } from "../../types/StudentType";
import { AnswerLogType } from "../../types/AnswerLogType";
import isFiltered from "../../utils/isFiltered";
import DashboardCell from "./DashboardCell";
import DashboardStudent from "./DashboardStudent";
import DashboardColHeader from "./DashboardColHeader";
import { setShowDetailStudents } from "../../store/actions";
import DashboardHeader from "./DashboardHeader";

const R = require("ramda");
const CAPACITY = 8,
  MAX_HEADER_LENGTH = 20;

function DashboardDisplay() {
  const params = useParams();
  const min = parseInt(params.min ?? "1");

  const {
    studentList: $studentList,
    questionMetadata: _questionMetadata,
    answerLog,
    showDetailStudents,
    nameFilter,
    periodFilter,
    classFilter,
  } = useSelector((state: StateType) => state.appState);

  // ************************************************************************
  // Show student detail on click. Save / remove student ID from array to
  // show / hide student detail
  const showDetailClick = (evt: MouseEvent<HTMLDivElement>) => {
    let sds: string[] = R.clone(showDetailStudents);
    const attr = evt.currentTarget.getAttribute("data-id") ?? "";
    if (R.includes(attr, sds)) {
      sds = R.without([attr], sds);
    } else {
      sds.push(attr);
    }
    setShowDetailStudents(sds);
  };

  // ************************************************************************
  // Get and process the student list - clone, filter, and sort by name
  // Filter students by name, period, and class based on filter values
  const filterStudents =
    (nameFilter: string, periodFilter: string, classFilter: string) =>
    (student: StudentType) => {
      return (
        (nameFilter.length === 0 ||
          isFiltered(student.lastName, nameFilter) ||
          isFiltered(student.firstName, nameFilter)) &&
        (periodFilter === "" || student.period === periodFilter) &&
        (classFilter === "" || student.className === classFilter)
      );
    };

  // Sort students by last / first names
  const sortStudents = (a: StudentType, b: StudentType) =>
    a.lastName + "," + a.firstName < b.lastName + "," + b.firstName ? -1 : 1;

  // Clone, filter, and sort student list - memoize the function so it isn't
  // called repeatedly
  const studentList: StudentType[] = useMemo(() => {
    const processStudents = R.pipe(
      R.clone,
      R.filter(filterStudents(nameFilter, periodFilter, classFilter)),
      R.sort(sortStudents)
    );
    return processStudents($studentList);
  }, [$studentList, nameFilter, periodFilter, classFilter]);

  // ************************************************************************
  // Truncate the question name if over MAX_HEADER_LENGTH characters
  const questionMetadata = R.clone(_questionMetadata).map(
    (q: QuestionMetadataType) => {
      q.abbrevText =
        q.text.length > MAX_HEADER_LENGTH
          ? q.text.slice(0, MAX_HEADER_LENGTH) + "..."
          : q.text;
      return q;
    }
  );

  // ************************************************************************
  // Reduce the log data for rendering
  //
  // Group log entries by student ID
  let logByStudent = R.groupBy(
    (item: AnswerLogType) => item.studentId,
    answerLog
  );

  // Summarize the log entries and include in the log
  // Get the student IDs
  const ids: string[] = R.keys(logByStudent);

  // For each student ID
  ids.forEach((id) => {
    // Group the log entries by question sequence number
    let bySeq = R.groupBy(
      (logItem: AnswerLogType) => logItem.seq,
      logByStudent[id]
    );

    // For each sequence number computer the number correct and the total number
    // of questions.  Save the summary data for each student
    let seqs: string[] = R.keys(bySeq);
    seqs.forEach((seq: string) => {
      const summary = bySeq[seq].reduce(
        (acc: { correct: number; total: number }, logItem: AnswerLogType) => {
          acc.total++;
          acc.correct += logItem.isCorrect ? 1 : 0;
          return acc;
        },
        { correct: 0, total: 0 }
      );
      bySeq[seq] = {
        logItems: bySeq[seq],
        correct: summary.correct,
        total: summary.total,
      };
    });
    logByStudent[id] = bySeq;
  });

  // ************************************************************************
  // Generate table rows for each student
  const studentRows = studentList.map((student: StudentType) => {
    let cells = [];

    // For each question sequence number render the cell with the summary statistics if log
    // entries exist or dashes if log entries are not found
    for (let seq = min; seq < min + CAPACITY; seq++) {
      const log = logByStudent[student.studentId];
      cells.push(
        <DashboardCell
          key={"td" + seq}
          log={log}
          seq={seq}
          studentId={student.studentId}
          showDetailStudents={showDetailStudents}
        />
      );
    }

    // The first cell is the student name, etc, other rows follow with
    // log information by question
    return (
      <tr
        key={"id" + student.studentId}
        className="expandable"
        onClick={showDetailClick}
        data-id={student.studentId}
      >
        <DashboardStudent student={student} />
        {cells}
      </tr>
    );
  });

  // Generate the column header including the question titles
  let colHeader = [];
  for (let seq = min; seq < min + CAPACITY; seq++) {
    const question = questionMetadata[seq - 1];
    colHeader.push(
      <DashboardColHeader key={"q" + seq} question={question} seq={seq} />
    );
  }

  // Render the complete page
  return (
    <>
      <Row>
        <DashboardHeader />
      </Row>
      <Row>
        <Col>
          <Table size="sm" striped className="dashboard-table">
            <thead>
              <tr>
                <th className="col-md-4">Name and Student ID</th>
                {colHeader}
              </tr>
            </thead>
            <tbody>{studentRows}</tbody>
            {studentList.length === 0 ? (
              <tfoot>
                <tr>
                  <td colSpan={9}>There are no students to display</td>
                </tr>
              </tfoot>
            ) : null}
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default DashboardDisplay;
