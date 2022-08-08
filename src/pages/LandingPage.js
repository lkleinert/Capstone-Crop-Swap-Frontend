import "./LandingPage.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
//figure out spacing in rows and columns

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
      <Form>
        <Row className="zipcode">
          <Col xs={{ span: 4, offset: 4 }}>
            <Form.Group controlId="formZipcode">
              <Form.Label></Form.Label>
              <Form.Control type="zipcode" placeholder="Enter your zipcode" />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="secondary" type="submit" className="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LandingPage;
