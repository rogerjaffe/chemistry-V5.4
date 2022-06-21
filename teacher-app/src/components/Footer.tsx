import pkg from '../../package.json'
import {Col, Row} from "reactstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col>
          <span>&copy; 2021 Roger Jaffe &mdash; Version {pkg.version}</span>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;
