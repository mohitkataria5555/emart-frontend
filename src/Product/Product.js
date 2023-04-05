import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductNavigation from "../Navigation/ProductNavigation";
import ProductComponent from "./ProductComponent";

export default function Product() {
  const [productData1, setProductData1] = useState([]);

  let session1 = sessionStorage.getItem("data");
  // console.log(session1);

  // Use effect to get data.
  useEffect(() => {
    axios.get("http://localhost:9100/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <>
      <ProductNavigation />
      <div className="productcart">
        {productData1.map((element) => {
          return (
            <>
              <ProductComponent key={element.id} data={element} />
            </>
          );
        })}
      </div>
    </>
  );
}
