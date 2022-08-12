import { Modal, Button } from "react-bootstrap";
import AddCropForm from "./AddCropForm";

const AddCropModal = ({
  showAddCrop,
  handleCloseAddCrop,
  user,
  addAvailableCrop,
  addGrowingCrop,
}) => {
  return (
    <Modal show={showAddCrop}>
      <Modal.Header>
        <Modal.Title>Add Crop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddCropForm
          user={user}
          handleCloseAddCrop={handleCloseAddCrop}
          addAvailableCrop={addAvailableCrop}
          addGrowingCrop={addGrowingCrop}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseAddCrop}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCropModal;
