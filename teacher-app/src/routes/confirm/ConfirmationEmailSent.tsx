import { Col, Row } from "reactstrap";

const ConfirmationEmailSent = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }} className="title">
        <h6>
          Please check your email for instructions to confirm your account
        </h6>
      </Col>
    </Row>
  );
};

export default ConfirmationEmailSent;
