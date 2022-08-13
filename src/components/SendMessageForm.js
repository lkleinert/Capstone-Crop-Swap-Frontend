import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const SendMessageForm = ({ addMessage, username, authUser }) => {
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (username, authUser, message) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/users/${username}/messages?authUser=${authUser}`,
        {
          message,
        }
      )
      .then((result) => {
        addMessage(result.data);
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    sendMessage(username, authUser, message);
    setMessage("");
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group as={Row} controlId="FormAddMessage">
        <Form.Label column>Message</Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </Col>
        <Col>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SendMessageForm;
