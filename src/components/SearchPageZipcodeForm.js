import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

//controlled form stores current typed in zip code in state
//when form submitted, db searches zipcode

const SearchPageZipcodeForm = ({
  currentZipcode,
  setCurrentZipcode,
  findUsers,
}) => {
  const [zipInput, setZipInput] = useState(currentZipcode);

  const handleChange = (e) => {
    setZipInput(e.target.value);
  };

  const submitZipCode = (e) => {
    e.preventDefault();
    setCurrentZipcode(zipInput);
    findUsers(zipInput);
  };

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
      </Row>
    </Form>
  );
};

export default SearchPageZipcodeForm;
