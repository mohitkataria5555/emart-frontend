import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
function FirstProd(props) {
  const naviagte = useNavigate();

  return (
    <Card id="cart" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.data.imageUrl} className="cardImg" />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>PRICE: {props.data.price}</ListGroup.Item>
        <ListGroup.Item>KILO PRICE: {props.data.quantity} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button
          onClick={() => {
            alert("You have not Logged in!");
            naviagte("/userlogin");
          }}
        >
          Add To Cart
        </button>
      </Card.Body>
    </Card>
  );
}

export default FirstProd;
