import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";

//only thing in state are values in zip code field and values in form for crops
//when form submitted, these values called in functions setState for zip and crops
//when form submitted here-> zipcode AND crops, axios call is made to database through useEffect b/c state has changed

const SearchPageZipcodeForm = ({
  currentZipcode,
  setCurrentZipcode,
  // setCurrentCrops,
  findUsers,
}) => {
  // console.log(searchedZipcode);
  //need to have stored-> current zipcode field and current crops
  const [zipInput, setZipInput] = useState(currentZipcode);

  const handleChange = (e) => {
    setZipInput(e.target.value);
  };

  const submitZipCode = (e) => {
    e.preventDefault();
    setCurrentZipcode(zipInput);
    findUsers(zipInput);
  };

  //user searches zipcode first
  //then can further filter crops for additional search

  return (
    <Form onSubmit={submitZipCode}>
      <Row className="zipcode-search-page">
        <Col xs={5}>
          <Form.Group controlId="formZipcodeSearch">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder={zipInput}
              value={zipInput}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={5}>
          <Button
            variant="secondary"
            type="submit"
            className="search"
            disabled={zipInput.length < 5}
          >
            Search Zipcode
          </Button>
        </Col>
        {/* <Col xs={3}>
          <Button
            variant="secondary"
            type="submit"
            className="search"
            disabled={zipInput.length < 5}
          >
            Search
          </Button>
        </Col> */}
      </Row>
    </Form>
  );
};

export default SearchPageZipcodeForm;
