import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";

function DashboardIsLoading() {
  const {
    studentListIsLoading,
    questionMetadataIsLoading,
    answerLogIsLoading,
  } = useSelector((state: StateType) => state.appState);

  if (studentListIsLoading || questionMetadataIsLoading || answerLogIsLoading) {
    return (
      <Row>
        <Col>
          <h6 className="center-justify">Question data cannot be loaded</h6>
        </Col>
      </Row>
    );
  } else {
    return null;
  }
}

export default DashboardIsLoading;
