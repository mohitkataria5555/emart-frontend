import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LNav.css';


const Header = () => {
    const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar-container">
      <h1 onClick={() => navigate("/")} className="navbar-brand">E-MART</h1>
        
      </div>
    </nav>
  );
};

export default Header;
