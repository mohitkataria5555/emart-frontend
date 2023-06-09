import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ImageChange from './ImageChange';
import './Navigation.css'; // import the CSS file

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
    <nav>
      <div className="navbar-container">
        <h1 onClick={() => navigate("/")} className="navbar-brand">E-MART</h1>
        <ul className="navbar-links">
          <li className="dropdown">
            <a href="#" className="dropdown-btn" onClick={() => navigate("/login")}>Login</a>
            <a href="#" className="dropdown-btn" onClick={() => navigate("/signup")}>Sign up</a>
            
          </li>
         
        </ul>
      </div>

    </nav>
    <ImageChange/>
    <Footer/>
    </>
  );
};

export default Navigation;
