import { Form, Row, Col, Button } from "react-bootstrap";
import "./ZipcodeForm.css";

const ZipcodeForm = () => {
  return (
    <Form>
      <Row className="zipcode">
        <Col xs={{ span: 4, offset: 4 }}>
          <Form.Group controlId="formZipcodeSearch">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your zipcode"
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
