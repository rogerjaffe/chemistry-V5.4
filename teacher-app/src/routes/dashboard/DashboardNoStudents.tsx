import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";

function DashboardNoStudents() {
  const {
    studentListIsLoading,
    questionMetadataIsLoading,
    answerLogIsLoading,
  } = useSelector((state: StateType) => state.appState);

  if (studentListIsLoading || questionMetadataIsLoading || answerLogIsLoading) {
    return (
      <Row>
        <Col>
          <h6 className="center-justify">There are no students to display</h6>
        </Col>
      </Row>
    );
  } else {
    return null;
  }
}

export default DashboardNoStudents;
