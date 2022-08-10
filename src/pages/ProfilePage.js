import axios from "axios";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";
import { useEffect, useState } from "react";
import EditBioModal from "../components/EditBioModal";

const ProfilePage = ({ authUser, setAuth }) => {
  const [user, setUser] = useState("");
  const [showEditBio, setShowEditBio] = useState(false);

  const handleShowEditBio = () => setShowEditBio(true);
  const handleCloseEditBio = () => setShowEditBio(false);

  const logoutUser = () => {
    localStorage.clear();
    setAuth(false, "");
  };

  const { id } = useParams();

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
      .then((result) => {
        const user = result.data;
        setUser(user);
      });
  };

  useEffect(() => {
    getUser();
  });

  return (
    <Container fluid>
      <Row className="top-bar m-5 mb-4">
        <Col xs={7}>
          <h1>CropSwap🌱</h1>
        </Col>
        <Col>
          {!authUser ? (
            <Button variant="warning" type="link" href="/">
              Home
            </Button>
          ) : (
            <Button variant="warning" type="link" href={`/users/${authUser}`}>
              My Profile
            </Button>
          )}
        </Col>
        {authUser ? (
          <Col>
            <Button variant="warning" type="link" href="/" onClick={logoutUser}>
              Logout
            </Button>
          </Col>
        ) : null}
        <Col>
          <Button variant="primary" type="input" href="/users">
            Search
          </Button>
        </Col>
      </Row>
      <Row className="border border-success border-2 m-4 align-items-center">
        <Col>
          <h1>{user.firstName}'s Garden</h1>
        </Col>
      </Row>
      <Row>
        <Col className="border border-warning mx-4">
          <h2>Bio</h2>
          <p>
            {!user.bio ? "Fill me out!" : user.bio}{" "}
            {authUser === id ? (
              <>
                <Button onClick={handleShowEditBio}>Edit</Button>
                <EditBioModal
                  showEditBio={showEditBio}
                  handleCloseEditBio={handleCloseEditBio}
                  authUser={authUser}
                />
              </>
            ) : (
              ""
            )}
          </p>
          <Card>
            <Card.Body>
              <Card.Title>Crops</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="border border-danger mx-4">
          <h2>Test2</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
