import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const EmailConfirmed = () => {
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }} className="title">
        <h6>Your email has been confirmed.</h6>
        <Link to="/login" className="title">
          Login
        </Link>
      </Col>
    </Row>
  );
};

export default EmailConfirmed;
