import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./ZipcodeForm.css";

const ZipcodeForm = () => {
  const [zipcode, setZipcode] = useState("");

  const handleChange = (e) => {
    setZipcode(e.target.value);
  };

  const navigate = useNavigate();

  //Links to SearchPage page, and passes in zipcode. Need conditional logic for loading page-> spinner
  const submitZipCode = (e) => {
    e.preventDefault();
    navigate("/users", { state: { zipcode } });
  };

  return (
    <Form onSubmit={submitZipCode}>
      <Row className="zipcode">
        <Col xs={{ span: 4, offset: 4 }}>
          <Form.Group controlId="formZipcodeSearch">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your zipcode"
              value={zipcode}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Button
            variant="secondary"
            type="submit"
            className="search"
            disabled={zipcode.length < 5}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ZipcodeForm;
