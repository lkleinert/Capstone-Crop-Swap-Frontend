import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const BioForm = ({ authUser, handleCloseEditBio }) => {
  const [bio, setBio] = useState("");

  const onChange = (e) => {
    setBio(e.target.value);
  };

  const updateBio = (bio) => {
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/users/${authUser}`, {
        bio: bio,
      })
      .then()
      .catch();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    updateBio(bio);
    setBio("");
    handleCloseEditBio();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Control
        type="text"
        name="bio"
        onChange={(e) => onChange(e)}
        value={bio}
        placeholder="Your Bio"
        required
      />
      <Button variant="success" type="submit" className="createUser">
        Save Bio
      </Button>
    </Form>
  );
};

export default BioForm;
