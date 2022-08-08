import { Form, Button } from "react-bootstrap";

const SignUpForm = () => {
  //here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
  //need some sort of onSubmit function for Button, which would also link to appropriate page

  return (
    <Form>
      <Form.Group className="mb-2" controlId="formFirstName">
        {/* <Form.Label></Form.Label> */}
        <Form.Control type="text" placeholder="First Name*" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formLastName">
        <Form.Control type="text" placeholder="Last Name*" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formUsername">
        <Form.Control type="text" placeholder="Username*" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Control type="password" placeholder="Password*" required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formZipcode">
        <Form.Control type="text" placeholder="Zipcode*" required />
      </Form.Group>
      <Button variant="success" type="submit" className="createUser">
        Create New User
      </Button>
    </Form>
  );
};

export default SignUpForm;
