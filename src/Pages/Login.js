
import LNav from './LNav'
import React, { useState } from 'react';
import './Login.css';
import  { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [backData, SetBacKData] = useState([]);
  
    const setYourEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const setYourPassword = (e) => {
        setPassword(e.target.value);
      };
      const check = (e) => {
        e.preventDefault();
    
        backData.map((ele) => {
          if (ele.email === email && ele.password === password) {
            let session = sessionStorage.getItem("data");
            if (session === null) {
              sessionStorage.setItem("data", ele.firstName);
            } else {
              sessionStorage.removeItem("data");
              sessionStorage.setItem("data", ele.firstName);
            }
            navigate("/");
            alert("Logged in Successfully");
          }
        // alert("Invalid email or password. Please try again.");
        });
      };
    
      useEffect(() => {
        axios
          .get("http://localhost:8080/customers/all")
          .then((response) => SetBacKData(response.data));
      }, []);

  return (
    <div>
        <LNav/>
        <div className="login-container">
      <div className="login-form">
        <h2>E-MART Login</h2>
        <div className="input-container">
          <input type="email" placeholder="Email"   onChange={(e) => setYourEmail(e)}/>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password"  onChange={(e) => setYourPassword(e)}/>
        </div>
        <button  onClick={check}>Login</button>
        <br/>
        <br/>
        <h6>Dont Have an Account?</h6>
        <br/>
    
        <button  onClick={() => navigate("/signup")}>Register</button>

      </div>
    </div>
      
    </div>
  )
}

export default Login
