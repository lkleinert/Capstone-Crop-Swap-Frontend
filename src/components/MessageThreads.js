import axios from "axios";
import { ListGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MessageThreads = ({ user }) => {
  const [threadUsers, setThreadUsers] = useState([]);

  const navigate = useNavigate();

  const getThreads = (user) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/messages/threads`
      )
      .then((result) => {
        const messageUsers = result.data;
        setThreadUsers(messageUsers);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getThreads(user);
  }, [user]);

  return (
    <ListGroup>
      {threadUsers.length === 0 ? (
        <h3>No message threads.</h3>
      ) : (
        threadUsers.map((user) => {
          return (
            <ListGroup.Item>
              {user}{" "}
              <Button
                variant="success mx-2"
                onClick={() => {
                  navigate(`/users/${user}`);
                }}
              >
                View Messages
              </Button>
            </ListGroup.Item>
          );
        })
      )}
    </ListGroup>
  );
};

export default MessageThreads;
