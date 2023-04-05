import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductNavigation from "../Navigation/ProductNavigation";
import FirstProd from "./FirstProd";

export default function FirstProdimp() {
  const [productData1, setProductData1] = useState([]);

  let session1 = sessionStorage.getItem("data");
  useEffect(() => {
    axios.get("http://localhost:9100/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <>
      <div className="productcart">
        {productData1.map((element) => {
          return (
            <>
              <FirstProd key={element.id} data={element} />
            </>
          );
        })}
      </div>
    </>
  );
}
