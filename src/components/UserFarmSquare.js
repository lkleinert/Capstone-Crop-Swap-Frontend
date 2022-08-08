import { Card } from "react-bootstrap";

const UserFarmSquare = ({ username, crops, zipcode }) => {
  console.log(username);
  //how to print out each available crop name? also, have both available and growing...
  console.log(crops);
  console.log(zipcode);
  return (
    <Card className="m-3">
      <Card.Img src="https://picsum.photos/300"></Card.Img>
      <Card.Body>
        <Card.Title> {username}</Card.Title>
        <Card.Text> {zipcode}</Card.Text>
        {/* <Button variant="primary">Read More</Button> */}
      </Card.Body>
    </Card>
  );
};

export default UserFarmSquare;
