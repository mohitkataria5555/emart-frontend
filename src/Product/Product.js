import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Product.css"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductHeader from "./ProductHeader";
import Footer from "../Pages/Footer";
import ProductComponent from "./ProductComponent";


export default function Product() {
  const [productData1, setProductData1] = useState([]);

  // Use effect to get data.
  useEffect(() => {
    axios.get("http://localhost:8079/api/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <>
      <ProductHeader/>
      <div className="productcart" style={{ marginLeft: "15px" }}>
        {productData1.map((element) => {
          return (
            <>
              <ProductComponent key={element.id} data={element} />
            </>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}
