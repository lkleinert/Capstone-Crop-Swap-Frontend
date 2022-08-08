import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";
import ZipcodeForm from "../components/ZipcodeForm";

const LandingPage = () => {
  return (
    <Container fluid>
      <Row className="top-bar m-5 mb-6">
        <Col xs={7}>
          <h1>CropSwap🌱</h1>
        </Col>
        <Col>
          <Button variant="warning" type="submit">
            Sign Up
          </Button>
        </Col>
        <Col>
          <Button>Log In</Button>
        </Col>
      </Row>
      <Row className="landing-pic">
        <Col xs={12} className="banner">
          <h1>Find and Trade Fresh Local Produce</h1>
        </Col>
      </Row>
      <ZipcodeForm></ZipcodeForm>
    </Container>
  );
};

export default LandingPage;
