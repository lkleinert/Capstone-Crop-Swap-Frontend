import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";
import SignUpModal from "../components/SignUpModal";
import LogInModal from "../components/LogInModal";
import ZipcodeForm from "../components/ZipcodeForm";

const LandingPage = ({ setAuth }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleShowLogIn = () => setShowLogIn(true);
  const handleCloseLogIn = () => setShowLogIn(false);

  return (
    <>
      <Link end to="/users">
        Search
      </Link>
      <br />
      <Link to="/users/:id">User Profile</Link>
      <br />
      <Container fluid>
        <Row className="top-bar m-5 mb-6">
          <Col xs={7}>
            <h1>CropSwap🌱</h1>
          </Col>
          <Col>
            <Button variant="warning" onClick={handleShowSignUp}>
              Sign Up
            </Button>
            <SignUpModal
              showSignUp={showSignUp}
              handleCloseSignUp={handleCloseSignUp}
              setAuth={setAuth}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={handleShowLogIn}>
              Log In
            </Button>
            <LogInModal
              showLogIn={showLogIn}
              handleCloseLogIn={handleCloseLogIn}
            />
          </Col>
        </Row>
        <Row className="landing-pic">
          <Col xs={12} className="banner">
            <h1>Find and Trade Fresh Local Produce</h1>
          </Col>
        </Row>
        <ZipcodeForm></ZipcodeForm>
      </Container>
    </>
  );
};

export default LandingPage;
