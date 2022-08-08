import { Modal, Button } from "react-bootstrap";
import LogInForm from "./LogInForm";

const LogInModal = ({ showLogIn, handleCloseLogIn }) => {
  return (
    <Modal show={showLogIn}>
      <Modal.Header>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LogInForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseLogIn}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogInModal;
