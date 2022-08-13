import { Form, Button, Row, Col } from "react-bootstrap";

const SendMessageForm = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="FormAddMessage">
        <Form.Label column>Message</Form.Label>
        <Col>
          <Form.Control type="text" />
        </Col>
        <Col>
          <Button>Send</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SendMessageForm;
