import { Modal, Button } from "react-bootstrap";
import SignUpForm from "./SignUpForm";

const SignUpModal = ({ showSignUp, handleCloseSignUp }) => {
  return (
    <Modal show={showSignUp}>
      <Modal.Header>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseSignUp}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;
