import React from 'react'
import LNav from './LNav'
import "./SignUp.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  { useEffect } from "react";
import axios from "axios";

var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userGet, setUserGet] = useState([]);

const setYourFirstName=(e)=> {
  setFirstName(e.target.value);
}
const setYourLastName=(e)=>{
  setLastName(e.target.value)
}


  const setYourEmail = (e) => {
    setEmail(e.target.value);
  };

  const setYourPassword = (e) => {
    setPassword(e.target.value);
  };
  const register = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email:email ,
      password: password,
      login: {
        // mobileNo: mobileNo,
        email: email,
        password: password,
        loginStatus: "false",
      },
    };
     if (
      email.substring(email.length - 10, email.length) !== "@gmail.com"
    ) {
      alert("Please Enter Email in right format");
    }  else if (password.length < 5 || password.length > 15) {
      alert("PassWord Should have Minimun character of 5 and Maximun of 15");
    } else if (!regularExpression.test(password)) {
      alert(
        "password should contain atleast one number and one special character"
      );
    } else {
      console.log(email);
      userGet.map((element) => {
        if (element.email === email ) {
          alert("User with same EMAIL already exist.");
          sessionStorage.setItem("user", true);
          navigate("/login");
          sessionStorage.removeItem("user");
        }  
      });
      let user = sessionStorage.getItem("user");
      if (user === null) {
        axios
          .post("http://localhost:8080/customers", data)
          .then((response) => response)
          .then((data) => {
            if (data.data === "User Registered Successfully!!.") {
              alert("Registration Failed!");
            } else {
              alert("Registration Successful!");
              navigate("/login");
            }
          });
      }
    }

    //
  };

  useEffect(() => {
    axios
      .get("http://localhost:9100/logins")
      .then((response) => setUserGet(response.data));
  }, []);
  
  return (
    <div>
        <LNav/>
        <div className="login-container">
      <div className="login-form">
        <h2>E-MART SignUp</h2>
        <div className="input-container">
          <input type="email" placeholder="First Name"     onChange={(e) => setYourFirstName(e)}/>
        </div>
        <div className="input-container">
          <input type="email" placeholder="Last Name"     onChange={(e) => setYourLastName(e)} />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email"     onChange={(e) => setYourEmail(e)} />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password"  onChange={(e) => setYourPassword(e)} />
        </div>
        <button    onClick={register} >SignUp</button>
        <br/>
        <br/>
       <h6> Back to Login</h6>
        <br/>
        <button onClick={() => navigate("/login")}>Login</button>


      </div>
    </div>
</div>
  )
}

export default SignUp
