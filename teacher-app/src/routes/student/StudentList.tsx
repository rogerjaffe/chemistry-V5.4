import {
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { MouseEvent, useState } from "react";
import getName from "../../utils/getName";
import { StateType } from "../../types/AppStateType";
import { StudentType } from "../../types/StudentType";
import { selectStudentAction } from "../../store/actions";

function StudentList() {
  const [sortScheme, setSortScheme] = useState("sortByName");
  const selectedStudentId = useSelector(
    (state: StateType) => state.appState.selectedStudentId
  );
  const studentList = useSelector(
    (state: StateType) => state.appState.studentList
  );
  const studentListIsLoading = useSelector(
    (state: StateType) => state.appState.studentListIsLoading
  );
  const dispatch = useDispatch();

  // Sorting schemes
  type SortFcnType = (a: StudentType, b: StudentType) => number;
  const sortByName = (a: StudentType, b: StudentType) =>
    getName(a) < getName(b) ? -1 : 1;
  const sortByPeriod = (a: StudentType, b: StudentType) =>
    a.period + getName(a) < b.period + getName(b) ? -1 : 1;
  const sortByClass = (a: StudentType, b: StudentType) =>
    a.className < b.className ? -1 : 1;

  interface SortFcnsType {
    [key: string]: SortFcnType;
  }

  const sortFcns: SortFcnsType = {
    sortByName: sortByName,
    sortByPeriod: sortByPeriod,
    sortByClass: sortByClass,
  };

  // Sorting schemes
  type SortDisplayType = (student: StudentType) => string;
  const displayByName = (student: StudentType) =>
    getName(student) + " (" + student.period + ")";
  const displayByPeriod = (student: StudentType) =>
    student.period + " " + getName(student);
  const displayByClass = (student: StudentType) =>
    getName(student) + " (" + student.period + " | " + student.className + ")";

  interface DisplayFcnsType {
    [key: string]: SortDisplayType;
  }

  const displayFcns: DisplayFcnsType = {
    sortByName: displayByName,
    sortByPeriod: displayByPeriod,
    sortByClass: displayByClass,
  };

  const selectStudent = (evt: MouseEvent<HTMLDivElement>) => {
    const el = evt.currentTarget;
    const studentId = el.getAttribute("data-id");
    if (!studentId) return;
    dispatch(selectStudentAction({ studentId }));
  };

  const changeSort =
    (sortBy: string) => (evt: MouseEvent<HTMLButtonElement>) => {
      setSortScheme(sortBy);
    };

  const $studentList = studentList ? [...studentList] : [];
  const _studentList = $studentList.sort((a, b) => sortFcns[sortScheme](a, b));

  return (
    <Card>
      <CardHeader className="student-list-sort">
        <h6>
          Sort by:{" "}
          <span
            className={
              sortScheme === "sortByName"
                ? "student-list-inactive-link"
                : "student-list-active-link"
            }
            onClick={changeSort("sortByName")}
          >
            Name
          </span>
          {"  "}
          <span
            className={
              sortScheme === "sortByPeriod"
                ? "student-list-inactive-link"
                : "student-list-active-link"
            }
            onClick={changeSort("sortByPeriod")}
          >
            Period
          </span>
          {"  "}
          <span
            className={
              sortScheme === "sortByClass"
                ? "student-list-inactive-link"
                : "student-list-active-link"
            }
            onClick={changeSort("sortByClass")}
          >
            Class
          </span>
        </h6>
      </CardHeader>
      <CardBody className="student-list">
        <ListGroup>
          {studentListIsLoading ? (
            <h5>Loading student list...</h5>
          ) : (
            _studentList.map((student) => (
              <ListGroupItem
                key={student.studentId}
                data-id={student.studentId}
                onClick={selectStudent}
                className="student-list-item"
                active={student.studentId === selectedStudentId}
              >
                {displayFcns[sortScheme](student)}
              </ListGroupItem>
            ))
          )}
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default StudentList;
