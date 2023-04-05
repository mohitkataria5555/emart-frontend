import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import axios from 'axios';
import Header from '../Navigation/Header';
import Footer from './Footer';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [backData, SetBacKData] = useState([]);
  
    const setYourEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const setYourPassword = (e) => {
      setPassword(e.target.value);
    };
  
    function check() {
      backData.map((ele) => {
        if (
          (ele.email === email && ele.password === password)
        ) {
          navigate("/adminProduct");
        }
      });
    }
  
    useEffect(() => {
      axios
        .get("http://localhost:8084/admins/all")
        .then((response) => SetBacKData(response.data));
    }, []);
  return (
    <>
      <div>
        <Header/>
        <div className="login-container">
          <div className="login-form">
            <h2>E-MART Admin Login</h2>
            <div className="input-container">
              <input type="email" placeholder="Email" onChange={(e) => setYourEmail(e)} />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" onChange={(e) => setYourPassword(e)} />
            </div>
            <button onClick={check}>Login</button>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AdminLogin;
