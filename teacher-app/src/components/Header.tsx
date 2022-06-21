import { Col, Row } from "reactstrap";
import beaker from "../assets/beaker.png";

function Header() {
  return (
    <Row className="header">
      <Col md={3}>
        <img className="img1" src={beaker} alt="Beaker icon" />
      </Col>
      <Col md={6}>
        <h3>Chemistry Homework</h3>
        <h6>Teacher dashboard</h6>
      </Col>
      <Col md={3}>
        <img className="img2" src={beaker} alt="Beaker icon" />
      </Col>
    </Row>
  );
}

export default Header;
