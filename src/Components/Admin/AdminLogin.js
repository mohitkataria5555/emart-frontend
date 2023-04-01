import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Navigation/Footer'
import Header from '../Navigation/Header'

const AdminLogin = () => {
    const navigate =useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
  return (
    <>
    <div>
    <Header/>
    <div className="login-container">
  <div className="login-form">
    <h2>E-MART Admin Login</h2>
    <div className="input-container">
      <input type="email" placeholder="Email"   />
    </div>
    <div className="input-container">
      <input type="password" placeholder="Password"  />
    </div>
    <button  >Login</button>
  </div>
</div>
<Footer/>
  
</div>
</>
  )
}

export default AdminLogin
