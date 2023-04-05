import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Product.css"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductHeader from "./ProductHeader";
import Footer from "../Pages/Footer";


export default function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8079/api/products").then((response) => {
      setProductData(response.data);
    });
  }, []);

  return (
    <>
      <ProductHeader/>
      <div className="divflex">
        {productData.map((ele) => {
          return (
            <>
              <div className="projectCard" style={{ height: "375px" }}>
                <Card>
                  <Card.Header className="cardHeader">
                    {" "}
                    {ele.name}{" "}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <img src={ele.imageUrl} className="product-image"></img>
                    </Card.Title>
                    <Card.Title>Category</Card.Title>
                    <Card.Text>{ele.categoryName}</Card.Text>
                    <Card.Title>Product Description</Card.Title>
                    <Card.Text>{ele.description}</Card.Text>
                    <button className="but">Add Cart</button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}
