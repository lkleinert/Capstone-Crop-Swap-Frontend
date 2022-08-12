import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row, Button, Spinner } from "react-bootstrap";
import "./SearchPage.css";
import UserFarmSquare from "../components/UserFarmSquare.js";
import SearchPageZipcodeForm from "../components/SearchPageZipcodeForm";
import CropsDropDown from "../components/CropsDropDown";
import axios from "axios";

const SearchPage = () => {
  const state = useLocation();
  const zipcode = state.state;

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
        const filteredUsers = users.filter((user) => user.Crops.length > 0);
        console.log(filteredUsers);
        setCurrentUsers(filteredUsers);
        return filteredUsers;
      })
      .then((filteredUsers) => {
        const cropsAvailable = [];
        for (const user of filteredUsers) {
          for (const crop of user.Crops) {
            cropsAvailable.push({
              label: crop.available,
              value: crop.available,
            });
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
          name={user.firstName}
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
          <Col xs={3}>
            <h1>CropSwap🌱</h1>
          </Col>
          <Col xs={{ span: 0, offset: 0 }}>
            <Button variant="warning" type="link" href="/">
              Home
            </Button>
          </Col>
          <Col xs={{ span: 5, offset: 2 }}>
            <SearchPageZipcodeForm
              currentZipcode={currentZipcode}
              setCurrentZipcode={setCurrentZipcode}
              findUsers={findUsers}
            ></SearchPageZipcodeForm>
          </Col>
          <Col xs={{ offset: 7 }}>
            <CropsDropDown
              currentCrops={currentCrops}
              currentZipcode={currentZipcode}
              findUsers={findUsers}
            ></CropsDropDown>
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
