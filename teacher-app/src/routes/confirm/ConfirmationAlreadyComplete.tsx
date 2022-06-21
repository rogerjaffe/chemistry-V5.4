import { Col, Row } from "reactstrap";

const ConfirmationAlreadyComplete = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <h6 className="title">This email has already been confirmed</h6>
      </Col>
    </Row>
  );
};

export default ConfirmationAlreadyComplete;
