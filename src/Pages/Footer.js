import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="footer">
        <p className="companyName"  onClick={() => navigate("/adminLogin")}>E-MART Pvt Limited</p>
      <p>Copyright © 2023</p>
    </div>
  )
}

export default Footer
