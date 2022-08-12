import { Modal, Button } from "react-bootstrap";
import EditBioForm from "./EditBioForm";

const EditBioModal = ({ showEditBio, handleCloseEditBio, user, editBio }) => {
  return (
    <Modal show={showEditBio}>
      <Modal.Header>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditBioForm
          user={user}
          handleCloseEditBio={handleCloseEditBio}
          editBio={editBio}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditBio}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBioModal;
