import { Col, Row } from "reactstrap";

const ResetCodeMissing = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }}>
        <h5 className="title">
          The reset code is missing. Please re-check the email for the correct
          password reset link.
        </h5>
      </Col>
    </Row>
  );
};

export default ResetCodeMissing;
