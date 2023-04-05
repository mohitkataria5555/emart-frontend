import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import "./AdminProduct.css";
import { useRef } from "react";
import AdminHeader from "../Navigation/AdminHeader";


const AdminProduct = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const descInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef= useRef();
  const categoryNameInputRef= useRef();
  const quantityInputRef = useRef();
  const [enteredName, setenteredName] = useState("");
  const [enteredDesc, setenteredDesc] = useState("");
  const [enteredImage, setenteredImage] = useState("");
  const [enteredId, setenteredId] = useState("");
  const [enteredCategoryName, setenteredCategoryName] = useState("");
  const [enteredPrice, setenteredPrice] = useState("");
  const [enteredQuantity, setenteredQuantity]= useState("");

  const nameOC = (event) => {
    setenteredName(event.target.value);
  };

  const imageUrlOC = (event) => {
    setenteredImage(event.target.value);
  };

  const desciptionOC = (event) => {
    setenteredDesc(event.target.value);
  };

  const idOC = (event) => {
    setenteredId(event.target.value);
  };
  const categoryNameOC =(event) =>{
    setenteredCategoryName(event.target.value);
  }
  const priceOC = (event) =>{
    setenteredPrice(event.target.value);
  }
  const quantityOC =(event) =>{
    setenteredQuantity(event.target.value);
  }  
  const submitHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    // const enteredProductName = productNameInputRef.current.value;
    // const enteredProductDesc = productDescInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;

    const productData = {

id:enteredId,
      name: enteredName,
      description: enteredDesc,
      price:enteredPrice,
      categoryName:enteredCategoryName,
      quantity:enteredQuantity,
      imageUrl: enteredImage,
     
     

    };

    const baseURL = "http://localhost:8079/api/products";
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        alert("Product added");
      })
      .catch((error) => {
        alert("error");
      });
idInputRef="";
    nameInputRef = "";
    imageInputRef = "";
    descInputRef = "";
    categoryNameInputRef="";
    priceInputRef="";
    quantityInputRef="";

    event.target.reset();
  };

  const updateHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    // const enteredProductId = productIdInputRef.current.value;
    // const enteredProductName = productNameInputRef.current.value;
    // const enteredProductDesc = productDescInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;

    const prodData = {
      id:enteredId,
      name: enteredName,
      description: enteredDesc,
      price:enteredPrice,
      categoryName:enteredCategoryName,
      quantity:enteredQuantity,
      imageUrl: enteredImage,
      
    };

    const baseURL = `http://localhost:8079/api/products/${enteredId}`;
    fetch(baseURL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(prodData),
    })
      .then((response) => {
        alert("Product updated");
      })
      .catch((error) => {
        alert("error");
      });
    idInputRef = "";
    nameInputRef = "";
    imageInputRef = "";
    descInputRef = "";
    priceInputRef="";
    quantityInputRef="";

    event.target.reset();
  };

  const deleteHandler = (event) => {
    event.preventDefault(); 
    const enteredProductId = idInputRef.current.value;

    const prodData = {
      id: enteredId,
    };

    const baseURL = `http://localhost:8079/api/products/${enteredId}`;
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(prodData),
    })
      .then((response) => {
        alert("Product deleted", window.location.reload);
      })
      .catch((error) => {
        alert("error");
      });
    idInputRef = "";

    event.target.reset();
  };

  const [addChange, setaddChange] = useState(true);
  const [updateChange, setupdateChange] = useState(false);
  const [deleteChange, setdeleteChange] = useState(false);

  const add = () => {
    setaddChange(true);
    setupdateChange(false);
    setdeleteChange(false);
  };
  const update = () => {
    setaddChange(false);
    setupdateChange(true);
    setdeleteChange(false);
  };

  const del = () => {
    setaddChange(false);
    setupdateChange(false);
    setdeleteChange(true);
  };

  return (
    <>
    <AdminHeader/>
     
      <div className="adminProduct">
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={add}>
                  ADD PRODUCT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={update}>
                  UPDATE PRODUCT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={del}>
                  {" "}
                  DELETE PRODUCT
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body
            style={{ display: addChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={submitHandler}>
            <div>
                <label>ID</label>
                <input
                  type="text"
                  required
                  ref={idInputRef}
                  onChange={idOC}
                />
              </div>
              <div>
                <label>Product Name</label>
                <input
                  type="text"
                  required
                  ref={nameInputRef}
                  onChange={nameOC}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="double"
                  required
                  ref={priceInputRef}
                  onChange={priceOC}
                />
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  required
                  ref={quantityInputRef}
                  onChange={quantityOC}
                />
              </div>
              <div>
                <label>Image Url</label>
                <input
                  type="text"
                  required
                  ref={imageInputRef}
                  onChange={imageUrlOC}
                />
              </div>
              <div>
                <label>Product Description</label>
                <input
                  type="text"
                  required
                  ref={descInputRef}
                  onChange={desciptionOC}
                />
              </div>
              <div>
                <label>Category Name</label>
                <input
                  type="text"
                  required
                  ref={categoryNameInputRef}
                  onChange={categoryNameOC}
                />
              </div>
              <div>
                <button className="frm-submit">Add Product</button>
              </div>
            </form>
            <hr />
          </Card.Body>
          <Card.Body
            style={{ display: updateChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={updateHandler}>
            <div>
                <label>ID</label>
                <input
                  type="text"
                  required
                  ref={idInputRef}
                  onChange={idOC}
                />
              </div>
              <div>
                <label>Product Name</label>
                <input
                  type="text"
                  required
                  ref={nameInputRef}
                  onChange={nameOC}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="double"
                  required
                  ref={priceInputRef}
                  onChange={priceOC}
                />
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  required
                  ref={quantityInputRef}
                  onChange={quantityOC}
                />
              </div>
              <div>
                <label>Image Url</label>
                <input
                  type="text"
                  required
                  ref={imageInputRef}
                  onChange={imageUrlOC}
                />
              </div>
              <div>
                <label>Product Description</label>
                <input
                  type="text"
                  required
                  ref={descInputRef}
                  onChange={desciptionOC}
                />
              </div>
              <div>
                <label>Category Name</label>
                <input
                  type="text"
                  required
                  ref={categoryNameInputRef}
                  onChange={categoryNameOC}
                />
              </div>
              <div>
                <button className="frm-submit">Upate Product</button>
              </div>
            </form>
          </Card.Body>
          <Card.Body
            style={{ display: deleteChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={deleteHandler}>
              <div>
                <label>Id</label>
                <input
                  type="text"
                  required
                  id="theatre"
                  ref={idInputRef}
                />
              </div>
              <div>
                <button className="frm-submit">Delete Product</button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminProduct;