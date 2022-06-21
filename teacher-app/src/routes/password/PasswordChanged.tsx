import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const PasswordChanged = () => {
  return (
    <Row>
      <Col className="header">
        <h6 className="success">
          Your password was changed. You can <Link to="/login">login</Link> with
          your new password.
        </h6>
      </Col>
    </Row>
  );
};

export default PasswordChanged;
