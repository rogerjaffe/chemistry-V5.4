import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import { AnswerLogType } from "../../types/AnswerLogType";
import QuestionRow from "./QuestionRow";

const R = require("ramda");

function QuestionList() {
  const { questionMetadata, answerLog, questionFilter } = useSelector(
    (state: StateType) => state.appState
  );

  const logGroup: { [idx: number]: AnswerLogType[] } = R.groupBy(
    (q: AnswerLogType) => q.seq,
    answerLog
  );

  const $questionFilter = questionFilter?.split(",") ?? [];

  return (
    <Card>
      <CardHeader className="question-list-sort">
        <h6>&nbsp;</h6>
      </CardHeader>
      <CardBody>
        <Table size="sm">
          <thead>
            <tr>
              <th className="center-justify">Sequence</th>
              <th>Subject</th>
              <th className="center-justify">Correct</th>
              <th className="center-justify">Attempts</th>
              <th className="center-justify">Percent</th>
              <th
                className="center-justify"
                title="Number of students who have attempted this question at least once"
              >
                Students
              </th>
            </tr>
          </thead>
          <tbody>
            {questionMetadata.map((q) => {
              const stats = logGroup[q.seq] ?? [];
              const summary = stats.reduce(
                (sum, stat) => {
                  sum.correct += stat.isCorrect ? 1 : 0;
                  sum.total++;
                  sum.students.add(stat.studentId);
                  return sum;
                },
                { correct: 0, total: 0, students: new Set<string>() }
              );
              return (
                <QuestionRow
                  key={"qlist" + q.seq}
                  seq={q.seq}
                  text={q.text}
                  questionFilter={$questionFilter}
                  summary={summary}
                />
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default QuestionList;
