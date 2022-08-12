import { Card, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserFarmSquare.css";

const UserFarmSquare = ({ username, name, crops, zipcode }) => {
  //how to print out each available crop name? also, crops-available and create an array
  //map and display another component for each crop-> if more than 3, add "and more!"
  // console.log(crops);

  const userImage = `./crop_images/${username}.jpeg`;
  const cardCrops = crops.map((crop) => {
    return (
      <Card.Text className="crop-details">
        {crop.available}, {crop.quantity}
      </Card.Text>
    );
  });

  const navigate = useNavigate();
  const visitProfilePage = () => {
    console.log(username);
    const userProfile = `/users/${username}`;
    navigate(userProfile);
  };

  return (
    <Card className="m-3 card">
      <div className="image-container">
        <Card.Img src={userImage}></Card.Img>
      </div>
      <Card.Body className="card-body">
        <Row>
          <Col>
            <Card.Title>
              {name}, {zipcode}
            </Card.Title>
            <Col>
              <Button
                className="user-button"
                variant="outline-primary"
                size="sm"
                onClick={visitProfilePage}
              >
                Profile
              </Button>
            </Col>
          </Col>
          <Col xs={5}>{cardCrops}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserFarmSquare;
