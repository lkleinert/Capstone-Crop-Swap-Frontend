import { Form, Button } from "react-bootstrap";

const LogInForm = () => {
  //here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
  //need some sort of onSubmit function for Button, which would check username/password and will link to appropriate page
  return (
    <Form>
      <Form.Group className="mb-2" controlId="formUsername">
        {/* <Form.Label></Form.Label> */}
        <Form.Control type="text" placeholder="Username*" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Control type="password" placeholder="Password*" required />
      </Form.Group>
      <Button variant="success" type="submit" className="createUser">
        Log In
      </Button>
    </Form>
  );
};

export default LogInForm;
