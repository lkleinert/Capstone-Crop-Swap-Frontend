import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const AddCropForm = ({
  handleCloseAddCrop,
  user,
  cropType,
  addAvailableCrop,
  addGrowingCrop,
}) => {
  const [inputs, setInputs] = useState({
    crop: "",
    quantity: "",
    cropType: "available",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addCrop = (array) => {
    const forNullCrop =
      array.cropType === "available" ? "growing" : "available";
    console.log(cropType);
    console.log(forNullCrop);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.username}/crops`,
        {
          [array.cropType]: array.crop,
          [forNullCrop]: null,
          quantity: array.quantity,
        }
      )
      .then((result) => {
        if (array.cropType === "available") {
          addAvailableCrop(result.data);
        } else {
          addGrowingCrop(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addCrop(inputs);
    setInputs({
      crop: "",
      quantity: "",
      cropType: "available",
    });
    handleCloseAddCrop();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="mb-2" controlId="formAddCrop">
        <Form.Check
          type="radio"
          name="cropType"
          id="available"
          inline
          label="Available"
          value="available"
          onChange={onChange}
          checked={inputs.cropType === "available"}
        />
        <Form.Check
          type="radio"
          name="cropType"
          id="growing"
          inline
          label="Growing"
          value="growing"
          onChange={onChange}
        />
        <Form.Control
          type="text"
          name="crop"
          onChange={(e) => onChange(e)}
          value={inputs.crop}
          placeholder="Name of Crop"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Control
          type="text"
          name="quantity"
          onChange={(e) => onChange(e)}
          value={inputs.quantity}
          placeholder="How many?"
        />
      </Form.Group>
      <Button variant="success" type="submit" className="createUser">
        Add Crop
      </Button>
    </Form>
  );
};

export default AddCropForm;
