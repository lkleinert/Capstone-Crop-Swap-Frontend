import { Modal, Button } from "react-bootstrap";
import EditCropsForm from "./EditCropsForm";
import "./EditCropsModal.css";

const EditCropsModal = ({
  showEditCrops,
  handleCloseEditCrops,
  availableCrops,
  growingCrops,
  user,
  updateAvailableCrops,
  updateGrowingCrops,
}) => {
  return (
    <Modal show={showEditCrops} className="edit-crops-modal">
      <Modal.Header>
        <Modal.Title>Edit Crops</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditCropsForm
          availableCrops={availableCrops}
          growingCrops={growingCrops}
          user={user}
          updateAvailableCrops={updateAvailableCrops}
          updateGrowingCrops={updateGrowingCrops}
          handleCloseEditCrops={handleCloseEditCrops}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditCrops}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCropsModal;
