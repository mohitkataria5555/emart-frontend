import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/Images/cartlogo.png'

const ProductHeader = () => { 
    const navigate = useNavigate();
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Mart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Orders</a>
        </li>
        <li>
        <a class="nav-link" href="#" onClick={() => navigate("/login")}>Profile</a>
        </li>
       <a href='/mycart'>
       <img class="cart-logo"src={logo}/>
       </a>
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default ProductHeader
