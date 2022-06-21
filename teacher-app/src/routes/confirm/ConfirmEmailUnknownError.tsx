import { Col, Row } from "reactstrap";

const ConfirmEmailUnknownError = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <h6 className="title">Confirm email</h6>
        <h6 className="title">Unknown error.</h6>
      </Col>
    </Row>
  );
};

export default ConfirmEmailUnknownError;
