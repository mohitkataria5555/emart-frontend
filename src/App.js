import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminProducts from "./Components/Admin/AdminProducts";
import Login from "./Components/Navigation/Login";

import Navigation from "./Components/Navigation/Navigation";
import Product from "./Components/Navigation/Product";
import SignUp from "./Components/Navigation/SignUp";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>
          <Route path="adminProduct" element={<AdminProducts/>}></Route>
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
