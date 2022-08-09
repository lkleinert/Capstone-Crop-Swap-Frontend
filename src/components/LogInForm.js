import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogInForm = ({ setAuth }) => {
  //here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
  //need some sort of onSubmit function for Button, which would check username/password and will link to appropriate page
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const loginUser = (array) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        username: array.username,
        password: array.password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data);
        setAuth(true, array.username);
        navigate(`/users/${array.username}`, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    loginUser(inputs);
    setInputs({
      username: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="mb-2" controlId="formUsername">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          type="text"
          name="username"
          onChange={(e) => onChange(e)}
          value={inputs.username}
          placeholder="Username*"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => onChange(e)}
          value={inputs.password}
          placeholder="Password*"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" className="createUser">
        Log In
      </Button>
    </Form>
  );
};

export default LogInForm;
