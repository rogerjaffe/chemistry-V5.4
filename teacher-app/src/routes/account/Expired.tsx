import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Expired = () => {
  return (
    <Row>
      <Col>
        <h5 className="title">
          Your session expired. Please <Link to={"/login"}>log in</Link> again
        </h5>
      </Col>
    </Row>
  );
};

export default Expired;
