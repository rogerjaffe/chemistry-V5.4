import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const PasswordResetCodeNotFoundError = () => {
  return (
    <Row>
      <Col className="header">
        <h6 className="error">
          The password reset URL has expired. Please{" "}
          <Link to="/forgot">try again.</Link>.
        </h6>
      </Col>
    </Row>
  );
};

export default PasswordResetCodeNotFoundError;
