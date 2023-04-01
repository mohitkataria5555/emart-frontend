import React from 'react'
import Header from './Header'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div>
        <Header/>
        <div className="login-container">
      <div className="login-form">
        <h2>E-MART SignUp</h2>
        <div className="input-container">
          <input type="email" placeholder="First Name" />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Last Name" />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <button>SignUp</button>
      </div>
    </div>
</div>
  )
}

export default SignUp
