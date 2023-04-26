import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <form>
          <h1>Sign In</h1>
          <div className="login__input">
            <label>E-mail</label>
            <input type="text" placeholder="Enter your e-mail" />
          </div>
          <div className="login__input">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          Not a member?{" "}
          <Link to="/signup"><span className="login__register">Register Now</span></Link>
          
        </p>
      </div>
    </div>
  );
}

export default Login;