import { Col, Row } from "reactstrap";
import StudentList from "./StudentList";
import StudentEdit from "./StudentEdit";

function Students() {
  return (
    <>
      <Row>
        <Col md={5}>
          <StudentList />
        </Col>
        <Col md={7}>
          <StudentEdit />
        </Col>
      </Row>
    </>
  );
}

export default Students;
