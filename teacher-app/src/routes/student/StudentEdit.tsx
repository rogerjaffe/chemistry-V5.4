import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { ChangeEvent, SetStateAction, useState, useEffect } from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import { StudentType } from "../../types/StudentType";
import {
  useDeleteStudentMutation,
  useRefreshJwtMutation,
  useUpdateStudentListMutation,
} from "../../api";
import { selectStudentAction } from "../../store/actions";

function StudentEdit() {
  const [studentId, setStudentId] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [period, setPeriod] = useState("");
  const [className, setClassName] = useState("");
  const [password, setPassword] = useState("");
  const [dirty, setDirty] = useState(false);
  const [newStudent, setNewStudent] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const [dupeStudentId, setDupeStudentId] = useState(false);
  const [deleteDisabled, setDeleteDisabled] = useState(false);

  const selectedStudentId = useSelector(
    (state: StateType) => state.appState.selectedStudentId
  );
  const selectedStudent = useSelector(
    (state: StateType) => state.appState.selectedStudent
  );
  const studentList = useSelector(
    (state: StateType) => state.appState.studentList ?? []
  );
  const jwt = useSelector((state: StateType) => state.appState.jwt ?? "");
  const email = useSelector((state: StateType) => state.appState.email ?? "");
  const dispatch = useDispatch();
  const [refreshJwt] = useRefreshJwtMutation();

  const [deleteStudentTrigger] = useDeleteStudentMutation();
  const [updateStudentListTrigger] = useUpdateStudentListMutation();

  const clearEditFields = () => {
    setStudentId("");
    setLastName("");
    setFirstName("");
    setPeriod("");
    setClassName("");
    setPassword("");
    setDirty(false);
  };

  useEffect(() => {
    if (!selectedStudent) return;
    const { studentId, lastName, firstName, period, className } =
      selectedStudent;
    setStudentId(studentId);
    setLastName(lastName);
    setFirstName(firstName);
    setPeriod(period);
    setClassName(className);
    setPassword("");
    setDirty(false);
  }, [selectedStudentId, selectedStudent, forceReload]);

  useEffect(() => {
    if (!newStudent && selectedStudentId === studentId) {
      setDupeStudentId(false);
    } else {
      if (
        studentList &&
        studentList.find((item) => item.studentId === studentId)
      ) {
        setDupeStudentId(true);
      } else {
        setDupeStudentId(false);
      }
    }
  }, [studentId, newStudent, selectedStudentId, studentList]);

  useEffect(() => {
    setIsValid(
      studentId.length > 0 &&
        lastName.length > 0 &&
        firstName.length > 0 &&
        period.length > 0 &&
        className.length > 0 &&
        !dupeStudentId
    );
  }, [studentId, lastName, firstName, period, className, dupeStudentId]);

  useEffect(() => {
    setDeleteDisabled(selectedStudentId?.length === 0);
  }, [selectedStudentId]);

  const addStudent = () => {
    setNewStudent(true);
    clearEditFields();
  };

  const save = () => {
    const newStudentList: StudentType[] = [
      {
        studentId,
        lastName,
        firstName,
        period,
        className,
        password,
      },
    ];
    updateStudentListTrigger({
      jwt,
      newStudentListJSON: JSON.stringify(newStudentList),
      shouldMerge: true,
      shouldReplace: false,
    })
      .unwrap()
      .then((response) => {
        setNewStudent(false);
        setDupeStudentId(false);
        setDirty(false);
        refreshJwt({ jwt: jwt ?? "" });
      })
      .catch((err) => console.log(err));
  };

  const cancel = () => {
    setForceReload(!forceReload);
    setNewStudent(false);
    setDupeStudentId(false);
    setDirty(false);
    refreshJwt({ jwt: jwt ?? "" });
  };

  const onChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (evt: ChangeEvent<HTMLInputElement>) => {
      setter(evt.currentTarget.value);
      setDirty(true);
    };

  const deleteStudent = () => {
    deleteStudentTrigger({ email, studentId, jwt })
      .unwrap()
      .then((response) => {
        dispatch(selectStudentAction({ studentId: "" }));
        clearEditFields();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col>
            <Button
              className="right-spacer"
              disabled={dirty}
              onClick={addStudent}
            >
              Add
            </Button>
            <Button disabled={dirty || deleteDisabled} onClick={deleteStudent}>
              Delete
            </Button>
          </Col>
          <Col>
            <h5 className="title edit-student-title">
              {newStudent ? "New" : "Edit"} student
            </h5>
          </Col>
          <Col className="right-justify">
            <Button
              className="right-spacer"
              disabled={!dirty || !isValid}
              onClick={save}
            >
              Save
            </Button>
            <Button disabled={!dirty} onClick={cancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="studentId">Student ID</Label>
            <Input
              type="text"
              invalid={dupeStudentId}
              id="studentId"
              name="studentId"
              onChange={onChange(setStudentId)}
              value={studentId}
            />
            <FormFeedback>This ID already exists</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              onChange={onChange(setLastName)}
              value={lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              onChange={onChange(setFirstName)}
              value={firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="period">Period</Label>
            <Input
              type="text"
              id="period"
              name="period"
              onChange={onChange(setPeriod)}
              value={period}
            />
          </FormGroup>
          <FormGroup>
            <Label for="className">Class</Label>
            <Input
              type="text"
              id="className"
              name="className"
              onChange={onChange(setClassName)}
              value={className}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">New password</Label>
            <Input
              type="text"
              id="password"
              name="password"
              onChange={onChange(setPassword)}
              value={password}
            />
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default StudentEdit;
