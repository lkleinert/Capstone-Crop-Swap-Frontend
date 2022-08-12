import { Card } from "react-bootstrap";
import "./UserFarmSquare.css";

const UserFarmSquare = ({ username, name, crops, zipcode }) => {
  //how to print out each available crop name? also, crops-available and create an array
  //map and display another component for each crop-> if more than 3, add "and more!"
  // console.log(crops);

  const userImage = `./crop_images/${username}.jpeg`;
  const cardCrops = crops.map((crop) => {
    return (
      <div>
        <Card.Text>
          {crop.available}, {crop.quantity}
        </Card.Text>
      </div>
    );
  });

  return (
    <Card className="m-3 card">
      <div className="image-container">
        <Card.Img src={userImage}></Card.Img>
      </div>
      <Card.Body className="card-body">
        <Card.Title> {name}</Card.Title>
        <Card.Text> {zipcode}</Card.Text>
        {cardCrops}
        {/* <Button variant="primary">Read More</Button> */}
      </Card.Body>
    </Card>
  );
};

export default UserFarmSquare;
