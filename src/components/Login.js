import React, { useState } from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign-Up Form */}
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign-In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button className="hidden" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
