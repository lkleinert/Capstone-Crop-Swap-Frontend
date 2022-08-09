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

  const findUsers = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        params: { zipcode: zipcode },
      })
      .then((res) => {
        const users = res.data;
        // console.log(users);
        navigate("/users", { state: { users } });
      });
  };

  const navigate = useNavigate();

  //need to link to SearchPage page and pass in results of findUsers! Also, need some conditional for loading page
  //useNavigate hook
  const submitZipCode = (e) => {
    e.preventDefault();
    findUsers();
    setZipcode("");
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
          <Button variant="secondary" type="submit" className="search">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ZipcodeForm;
