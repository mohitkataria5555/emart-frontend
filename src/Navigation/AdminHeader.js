import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHeader = () => {
    const navigate =useNavigate();
  return (
    <div>
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
          <a class="nav-link" href="#"  onClick={() => navigate("/adminProduct")}>Products</a>
        </li>
        <li>
        <a class="nav-link" href="#" onClick={() => navigate("/login")}>Orders</a>
        </li>
    
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
      
    </div>
  )
}

export default AdminHeader
