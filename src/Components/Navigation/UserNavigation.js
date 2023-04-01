import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';


const UserNavigation = () => {
    const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar-container">
      <h1 onClick={() => navigate("/")} className="navbar-brand">E-MART</h1>
      <ul>
      <li className="dropdown">
            <a href="#" className="dropdown-btn" onClick={() => navigate("/login")}>My Profile</a>
            <a href="#" className="dropdown-btn" onClick={() => navigate("/")}>Logout</a>
            <a href="#" className="dropdown-btn" onClick={() => navigate("/signup")}>Cart</a>
            
          </li>
          </ul>
        
      </div>
    </nav>
  );
};

export default UserNavigation
