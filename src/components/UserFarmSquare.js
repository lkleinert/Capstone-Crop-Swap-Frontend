import { Card, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserFarmSquare.css";

const UserFarmSquare = ({ username, name, crops, zipcode }) => {
  //how to print out each available crop name? also, crops-available and create an array
  //map and display another component for each crop-> if more than 3, add "and more!"
  // console.log(crops);

  const userImage = `./crop_images/${username}.jpeg`;

  let cardCrops;
  crops.length <= 3
    ? (cardCrops = crops.map((crop) => {
        return (
          <Card.Text className="crop-details">
            {crop.available}, {crop.quantity}
          </Card.Text>
        );
      }))
    : (cardCrops = (
        <>
          <Card.Text className="crop-details">
            {crops[0].available}, {crops[0].quantity}
          </Card.Text>
          <Card.Text className="crop-details">
            {crops[1].available}, {crops[1].quantity}
          </Card.Text>
          <Card.Text className="crop-details">
            {crops[2].available}, {crops[2].quantity}
          </Card.Text>
          <Card.Text className="crop-details" id="extra-options">
            And more!
          </Card.Text>
        </>
      ));

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
          <Col xs={6}>
            <Card.Title>
              {name}, {zipcode}
            </Card.Title>
            <Col xs={{ span: 4, offset: 2 }}>
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
