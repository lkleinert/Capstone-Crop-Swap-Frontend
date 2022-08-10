import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row, Button, Spinner } from "react-bootstrap";
import "./SearchPage.css";
import UserFarmSquare from "../components/UserFarmSquare.js";
import SearchPageZipcodeForm from "../components/SearchPageZipcodeForm";
import axios from "axios";

const SearchPage = () => {
  const state = useLocation();
  const zipcode = state.state.zipcode;

  //only current zipcode can be stored in state to trigger rerendering.  If we have crops too, rendering is continuous
  //do we even need zipcode and current crops in state though?
  const [currentZipcode, setCurrentZipcode] = useState(zipcode);
  const [currentCrops, setCurrentCrops] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const findUsers = (currentZipcode, currentCrops) => {
    return axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        params: { zipcode: currentZipcode, crop: currentCrops },
      })
      .then((res) => {
        const users = res.data;
        setCurrentUsers(users);
        return users;
      })
      .then((users) => {
        const cropsAvailable = [];
        for (const user of users) {
          for (const crop of user.Crops) {
            cropsAvailable.push(crop.available);
          }
        }
        setCurrentCrops(cropsAvailable);
        //prevents an empty search when search page is first loading from landing page
        setLoading(true);
      });
  };

  useEffect(() => {
    findUsers(currentZipcode, currentCrops);
    // setLoading(true);
  }, []);

  const userArray = currentUsers.map((user) => {
    return (
      <div>
        <UserFarmSquare
          username={user.username}
          crops={user.Crops}
          zipcode={user.zipcode}
        />
      </div>
    );
  });

  if (!loading) {
    return <Spinner animation="border" />;
  } else {
    return (
      <Container fluid>
        <Row className="top-bar m-5 mb-6">
          <Col>
            <h1>CropSwap🌱</h1>
          </Col>
          {/* <Col xs={{ span: 1, offset: 2 }}>
          <Button variant="warning" type="link" href="/">
            Home
          </Button>
        </Col> */}
          <Col>
            {/* <Button variant="primary" type="input">
            Find Crops
          </Button> */}
            <SearchPageZipcodeForm
              currentZipcode={currentZipcode}
              setCurrentZipcode={setCurrentZipcode}
              // setCurrentCrops={setCurrentCrops}
              findUsers={findUsers}
            ></SearchPageZipcodeForm>
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
  }
};

export default SearchPage;
