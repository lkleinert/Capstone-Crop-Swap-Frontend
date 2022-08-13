import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setAuth }) => {
  //here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
  //need some sort of onSubmit function for Button, which would also link to appropriate page
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    zipcode: "",
  });

  let navigate = useNavigate();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createUser = (array) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        firstName: array.firstName,
        lastName: array.lastName,
        username: array.username,
        password: array.password,
        zipcode: array.zipcode,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setAuth(true, result.data.user.username);
        navigate(`/users/${result.data.user.username}`, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    createUser(inputs);
    setInputs({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      zipcode: "",
    });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="mb-2" controlId="formFirstName">
        {/* <Form.Label></Form.Label> */}
        <Form.Control
          type="text"
          name="firstName"
          onChange={(e) => onChange(e)}
          value={inputs.firstName}
          placeholder="First Name*"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formLastName">
        <Form.Control
          type="text"
          name="lastName"
          onChange={(e) => onChange(e)}
          value={inputs.lastName}
          placeholder="Last Name*"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formUsername">
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
      <Form.Group className="mb-2" controlId="formZipcode">
        <Form.Control
          type="text"
          name="zipcode"
          onChange={(e) => onChange(e)}
          value={inputs.zipcode}
          placeholder="Zipcode*"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" className="createUser">
        Create New User
      </Button>
    </Form>
  );
};

export default SignUpForm;
