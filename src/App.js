import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import ProductNavigation from "./Navigation/ProductNavigation"
import Product from "./Product/Product"
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import Cart from "./Cart/Cart"
import Order from "./Cart/Order"
import AdminLogin from './Pages/AdminLogin';
import AdminProducts from './Pages/AdminProducts';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/productpage" element={<Product />} />
          <Route
            path="/productnavigation"
            element={<ProductNavigation />}
          ></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>
          <Route path="/adminProduct" element={<AdminProducts/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
