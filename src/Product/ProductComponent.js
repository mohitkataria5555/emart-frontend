import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Product.css";

function ProductComponent(props) {
  const [cartAdd, setCartAdd] = useState(false);
  const [buttonValue, setButtonValue] = useState("Add To Cart");
  const [productData1, setProductData1] = useState([]);

  function cartHandler(id) {
    setCartAdd(true);
    setButtonValue("Product is added");

    productData1.map((ele) => {
      if (ele.id == id) {
        ele = {
          ...ele,
          mobileNo: parseInt(sessionStorage.getItem("data")),
        };
        axios
          .post("http://localhost:8083/carts", ele)
          .then((response) => console.log(response));
      }
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8079/api/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <div className="divflex">
    <Card id="cart" style={{ width: "18rem" }} className="projectCard"  >
      <Card.Img variant="top" src={props.data.imageUrl} className="cardImg"  />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {props.data.price}</ListGroup.Item>
        <ListGroup.Item>Quantity: {props.data.quantity} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button
          id="addcart"
          disabled={cartAdd}
          onClick={() => cartHandler(props.data.id)}
        >
          {buttonValue}
        </button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductComponent;
