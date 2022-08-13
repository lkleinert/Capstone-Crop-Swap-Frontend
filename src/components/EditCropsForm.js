import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const EditCropsForm = ({
  availableCrops,
  growingCrops,
  user,
  updateAvailableCrops,
  updateGrowingCrops,
}) => {
  const [aCrops, setACrops] = useState(availableCrops);
  const [gCrops, setGCrops] = useState(growingCrops);

  const onChangeAvailable = (e) => {
    const intName = Number(e.target.name);
    const newACrops = aCrops.map((crop) => {
      if (crop.id === intName) {
        return { ...crop, quantity: e.target.value };
      }
      return crop;
    });
    setACrops(newACrops);
  };

  const onChangeGrowing = (e) => {
    const intName = Number(e.target.name);
    const newGCrops = gCrops.map((crop) => {
      if (crop.id === intName) {
        return { ...crop, quantity: e.target.value };
      }
      return crop;
    });
    setGCrops(newGCrops);
  };

  const onDeleteAvailable = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/crops/${id}`
      )
      .then((result) => {
        const newACrops = aCrops.filter((crop) => crop.id !== id);
        setACrops(newACrops);
        updateAvailableCrops(newACrops);
      })
      .catch((err) => console.log(err));
  };

  const onDeleteGrowing = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/crops/${id}`
      )
      .then((result) => {
        const newGCrops = gCrops.filter((crop) => crop.id !== id);
        setGCrops(newGCrops);
        updateGrowingCrops(newGCrops);
      })
      .catch((err) => console.log(err));
  };

  const onUpdateAvailable = (crop) => {
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/crops/${crop.id}`,
        {
          available: crop.available,
          growing: null,
          quantity: crop.quantity,
        }
      )
      .then((result) => {
        const newACrops = [...aCrops];
        setACrops(newACrops);
        updateAvailableCrops(newACrops);
      });
  };

  const onUpdateGrowing = (crop) => {
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/crops/${crop.id}`,
        {
          available: null,
          growing: crop.growing,
          quantity: crop.quantity,
        }
      )
      .then((result) => {
        const newGCrops = [...gCrops];
        setGCrops(newGCrops);
        updateGrowingCrops(newGCrops);
      });
  };

  return (
    <Form>
      <h3>Available</h3>
      {aCrops.map((crop) => {
        return (
          <Form.Group
            as={Row}
            className="mb-2"
            controlId="formEditAvailableCrops"
          >
            <Form.Label column sm={2}>
              {crop.available}
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name={crop.id}
                onChange={onChangeAvailable}
                value={crop.quantity}
                placeholder={crop.quantity}
              />
            </Col>
            <Col>
              <Button onClick={(e) => onUpdateAvailable(crop)}>
                Save Change
              </Button>
            </Col>
            <Col>
              <Button onClick={(e) => onDeleteAvailable(crop.id)}>
                Delete Crop
              </Button>
            </Col>
          </Form.Group>
        );
      })}
      <h3>Growing</h3>
      {gCrops.map((crop) => {
        return (
          <Form.Group
            as={Row}
            className="mb-2"
            controlId="formEditGrowingCrops"
          >
            <Form.Label column sm={2}>
              {crop.growing}
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name={crop.id}
                onChange={onChangeGrowing}
                value={crop.quantity}
                placeholder={crop.quantity}
              />
            </Col>
            <Col>
              <Button onClick={(e) => onUpdateGrowing(crop)}>
                Save Change
              </Button>
            </Col>
            <Col>
              <Button onClick={(e) => onDeleteGrowing(crop.id)}>
                Delete Crop
              </Button>
            </Col>
          </Form.Group>
        );
      })}
    </Form>
  );
};

export default EditCropsForm;
