import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductNavigation from "../Navigation/ProductNavigation";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  let mobiledata = parseInt(sessionStorage.getItem("data"));

  // CartData Code : Cart Increament Code
  function pluseChange(id) {
    cartData.map((element) => {
      if (element.id === id) {
        let ele = {
          ...element,
          quantity: element.quantity + 1,
        };
        axios
          .put(`http://localhost:9100/cart/update/${id}`, ele)
          .then((response) => {});
      }
    });
  }

  // CartData Code : Cart Decreament Code
  function minusChange(id) {
    cartData.map((element) => {
      if (element.id === id) {
        let ele = {
          ...element,
          quantity: element.quantity - 1,
        };
        axios
          .put(`http://localhost:9100/cart/update/${id}`, ele)
          .then((response) => {});
      }
    });
  }

  // Order page
  function ordernow() {
    navigate("/order");
  }

  useEffect(() => {
    axios.get("http://localhost:9100/cart").then((response) => {
      setCartData(response.data);
    });
  });

  return (
    <>
      <ProductNavigation />
      <h1 id="cartid"> YOUR CART</h1>
      <Table striped bordered hover className="tablecomponent">
        <tr className="tabledata">
          <th>PRODUCT NAME</th>
          <th>PRODUCT PRICE</th>
          <th>PRODUCT QUANTITY</th>
        </tr>
        {cartData.map((ele) => {
          if (ele.mobileNo === mobiledata) {
            return (
              <>
                <tr className="tabledata">
                  <td>{ele.name}</td>
                  <td>{ele.price * ele.quantity}</td>
                  <td>{ele.quantity}</td>
                  <button
                    onClick={() => pluseChange(ele.id)}
                    className="buttonclass1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => minusChange(ele.id)}
                    className="buttonclass2"
                  >
                    -
                  </button>
                </tr>
              </>
            );
          } else {
            return null;
          }
        })}
      </Table>
      <h2 id="placeorderid" onClick={ordernow}>
        {" "}
        Place your order!{" "}
      </h2>
    </>
  );
}
