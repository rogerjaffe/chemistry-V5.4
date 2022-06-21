import { Col, Row } from "reactstrap";

const ConfirmAccountLoading = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <h6 className="title">Please wait while your email is confirmed...</h6>
      </Col>
    </Row>
  );
};

export default ConfirmAccountLoading;
