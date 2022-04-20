/* 
  Signup Component (inside a modal):
Should take an email address 
Password (twice to make sure passwords match)
First and last name
Phone number
*/

import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit() {
    login(email, password);
  }

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
