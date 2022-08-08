import { useLocation } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./SearchPage.css";
import UserFarmSqaure from "../components/UserFarmSquare.js";

const SearchPage = () => {
  const state = useLocation();
  console.log(state.state);
  const users = state.state.users;

  const userArray = users.map((user) => {
    return (
      <div>
        <UserFarmSqaure
          username={user.username}
          crops={user.Crops}
          zipcode={user.zipcode}
        />
      </div>
    );
  });
  return (
    <Container fluid>
      <Row className="top-bar m-5 mb-6">
        <Col xs={7}>
          <h1>CropSwap🌱</h1>
        </Col>
        <Col>
          <Button variant="warning" type="link" href="/">
            Home
          </Button>
        </Col>
        <Col>
          <Button variant="primary" type="input">
            Find Crops
          </Button>
        </Col>
      </Row>
      <Row className="users-container">
        <Col xs={12} className="banner">
          {userArray.length > 0 ? (
            userArray
          ) : (
            <h1>No produce found. Please try other search filters.</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
