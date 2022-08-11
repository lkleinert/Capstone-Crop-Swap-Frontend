import axios from "axios";
import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useEffect, useState } from "react";
import EditBioModal from "../components/EditBioModal";

const ProfilePage = ({ authUser, setAuth }) => {
  const [user, setUser] = useState("");
  const [availableCrops, setAvailableCrops] = useState([]);
  const [growingCrops, setGrowingCrops] = useState([]);
  const [showEditBio, setShowEditBio] = useState(false);

  const handleShowEditBio = () => setShowEditBio(true);
  const handleCloseEditBio = () => setShowEditBio(false);

  let navigate = useNavigate();

  const onSearch = () => {
    console.log(user.zipcode);
    navigate("/users", { state: user.zipcode });
  };

  const logoutUser = () => {
    localStorage.clear();
    setAuth(false, "");
  };

  const { id } = useParams();

  const getUser = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
      .then((result) => {
        const user = result.data;
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  const getCrops = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}/crops`)
      .then((result) => {
        const crops = result.data;
        setAvailableCrops(crops.filter((crop) => crop.available));
        setGrowingCrops(crops.filter((crop) => crop.growing));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser(id);
    getCrops(id);
  }, [id]);

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
          <Button variant="primary" type="input" onClick={onSearch}>
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
            {!user.bio ? "Fill me out!" : user.bio}
            {authUser === id ? (
              <>
                <Button onClick={handleShowEditBio}>Edit</Button>
                <EditBioModal
                  showEditBio={showEditBio}
                  handleCloseEditBio={handleCloseEditBio}
                  user={user}
                />
              </>
            ) : (
              ""
            )}
          </p>
          <Row>
            <h2>Crops</h2>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Available</Card.Title>
                  <ListGroup>
                    {availableCrops.map((crop) => {
                      return (
                        <ListGroup.Item>
                          {crop.available} - {crop.quantity}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Growing</Card.Title>
                  <ListGroup>
                    {growingCrops.map((crop) => {
                      return (
                        <ListGroup.Item>
                          {crop.growing} - {crop.quantity}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="border border-danger mx-4">
          <h2>Test2</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
