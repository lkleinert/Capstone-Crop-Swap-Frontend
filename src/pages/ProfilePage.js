import { Container, Col, Row, Button } from "react-bootstrap";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <Container fluid>
      <Row className="top-bar m-5 mb-6">
        <Col>
          <h1>CropSwap🌱</h1>
        </Col>
        <Col xs={{ span: 1, offset: 4 }}>
          <Button variant="warning" type="link" href="/">
            Home
          </Button>
        </Col>
        <Col>
          <Button variant="primary" type="input" href="/users">
            Search
          </Button>
        </Col>
      </Row>
      <Row className="user-information">
        <Col xs={12} className="banner">
          <h1>User Info</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
