import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Navigation/Footer'
import Header from '../Navigation/Header'
import { useEffect } from 'react'
import axios from 'axios'


const AdminLogin = () => {
    const navigate =useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
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
            navigate("/adminProductb");
            alert("Logged in Successfully");
          }
        //   alert("Invalid email or password. Please try again.");
        });
      };
    
      useEffect(() => {
        axios
          .get("http://localhost:8084/admin/A01")
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
      <input type="email" placeholder="Email"  onChange={(e) => setYourEmail(e)}/>
    </div>
    <div className="input-container">
      <input type="password" placeholder="Password" onChange={(e) => setYourPassword(e)}  />
    </div>
    <button onClick={check} >Login</button>
  </div>
</div>
<Footer/>
  
</div>
</>
  )
}

export default AdminLogin
