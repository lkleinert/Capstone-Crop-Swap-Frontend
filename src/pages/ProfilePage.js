import axios from "axios";
import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import "../components/Message.css";
import "../components/MessageList.css";
import { useEffect, useState } from "react";
import EditBioModal from "../components/EditBioModal";
import AddCropModal from "../components/AddCropModal";
import EditCropsModal from "../components/EditCropsModal";
import MessageThreads from "../components/MessageThreads";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";

const ProfilePage = ({ authUser, setAuth }) => {
  const [user, setUser] = useState("");
  const [availableCrops, setAvailableCrops] = useState([]);
  const [growingCrops, setGrowingCrops] = useState([]);
  const [showEditBio, setShowEditBio] = useState(false);
  const [showAddCrop, setShowAddCrop] = useState(false);
  const [showEditCrops, setShowEditCrops] = useState(false);
  const [bio, setBio] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSendMessageForm, setShowSendMessageForm] = useState(false);

  const handleShowEditBio = () => setShowEditBio(true);
  const handleCloseEditBio = () => setShowEditBio(false);
  const handleShowAddCrop = () => setShowAddCrop(true);
  const handleCloseAddCrop = () => setShowAddCrop(false);
  const handleShowEditCrops = () => setShowEditCrops(true);
  const handleCloseEditCrops = () => setShowEditCrops(false);

  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/users", { state: user.zipcode });
  };

  const logoutUser = () => {
    localStorage.clear();
    setAuth(false, "");
  };

  const updateAvailableCrops = (crops) => {
    setAvailableCrops(crops);
  };

  const updateGrowingCrops = (crops) => {
    setGrowingCrops(crops);
  };

  const addAvailableCrop = (crop) => {
    const newCrops = [...availableCrops];
    newCrops.push(crop);
    setAvailableCrops(newCrops);
  };

  const addGrowingCrop = (crop) => {
    const newCrops = [...growingCrops];
    newCrops.push(crop);
    setGrowingCrops(newCrops);
  };

  const editBio = (bio) => {
    setBio(bio);
  };

  const addMessage = (message) => {
    const newMessages = [...messages];
    newMessages.push(message);
    setMessages(newMessages);
  };

  const { id } = useParams();

  const getUser = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
      .then((result) => {
        const user = result.data;
        setUser(user);
        setBio(user.bio);
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

  const getMessages = (username, authUser) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/users/${username}/messages?authUser=${authUser}`
      )
      .then((result) => {
        setMessages(result.data);
      });
  };

  useEffect(() => {
    getUser(id);
    getCrops(id);
    if (authUser !== id) {
      getMessages(id, authUser);
    }
  }, [id, authUser]);

  return (
    <Container fluid className="profile-page">
      <Row className="top-bar p-4">
        <Col xs={3} className="mx-2">
          <h1>CropSwap🌱</h1>
        </Col>
        <Col xs={{ span: 2, offset: 3 }}>
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
          <Button variant="secondary" type="input" onClick={onSearch}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className="border-top border-bottom border-secondary border-2 align-items-center headStrip">
        <Row>
          <h1>{user.firstName}'s Garden</h1>
        </Row>
        <Col className="py-4">
          <img alt="profile" src={`/crop_images/${id}.jpeg`} />
        </Col>
        <Col className="bg-light mx-4 p-2 rounded">
          <h2>About Me</h2>
          <p>
            {!bio ? "Fill me out!" : bio}
            {authUser === id ? (
              <>
                <br />
                <Button
                  variant="outline-success my-2"
                  onClick={handleShowEditBio}
                >
                  Edit
                </Button>
                <EditBioModal
                  showEditBio={showEditBio}
                  handleCloseEditBio={handleCloseEditBio}
                  user={user}
                  editBio={editBio}
                />
              </>
            ) : (
              ""
            )}
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col
          xs={7}
          className="border border-secondary border-2 rounded mx-4 p-2 cropsColumn"
        >
          <Row>
            <h2>Crops</h2>
            {authUser === id ? (
              <>
                <Col>
                  <Button variant="success my-2" onClick={handleShowAddCrop}>
                    Add Crop
                  </Button>
                </Col>
                <AddCropModal
                  showAddCrop={showAddCrop}
                  handleCloseAddCrop={handleCloseAddCrop}
                  user={user}
                  addAvailableCrop={addAvailableCrop}
                  addGrowingCrop={addGrowingCrop}
                />
                {availableCrops.length > 0 || growingCrops.length > 0 ? (
                  <>
                    <Col>
                      <Button
                        variant="success my-2"
                        onClick={handleShowEditCrops}
                      >
                        Edit Crops
                      </Button>
                    </Col>
                    <EditCropsModal
                      showEditCrops={showEditCrops}
                      handleCloseEditCrops={handleCloseEditCrops}
                      availableCrops={availableCrops}
                      growingCrops={growingCrops}
                      user={user}
                      updateAvailableCrops={updateAvailableCrops}
                      updateGrowingCrops={updateGrowingCrops}
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </Row>
          <Row>
            <Col xs={6}>
              <Card border="success" id="availableCard">
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
            <Col xs={6}>
              <Card border="success" id="growingCard">
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
        <Col className="border border-secondary border-2 rounded me-4 messagesColumn">
          {authUser === id ? (
            <>
              <h2>Users I'm Messaging</h2>
              <MessageThreads user={user} />
            </>
          ) : !authUser ? (
            <>
              <h2>Messages</h2>
              <h3>Please log in to message this user.</h3>
            </>
          ) : messages.length > 0 ? (
            <>
              <h2>Messages</h2>
              <MessageList
                messages={messages}
                addMessage={addMessage}
                username={user.username}
                authUser={authUser}
              />
            </>
          ) : (
            <>
              <h2>Messages</h2>
              <Button
                variant="success"
                onClick={(e) => setShowSendMessageForm(true)}
              >
                Send this user a message!
              </Button>
              {showSendMessageForm ? (
                <SendMessageForm
                  addMessage={addMessage}
                  username={user.username}
                  authUser={authUser}
                />
              ) : (
                ""
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
