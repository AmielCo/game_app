/* 
  Signup Component (inside a modal):
Should take an email address 
Password (twice to make sure passwords match)
First and last name
Phone number
*/

import React, { useState } from "react";
import "./SignUp.css";
import useAuth from "../hooks/useAuth.js";

const SignUp = () => {
  const {
    activeUser,
    onLogin,
    onLogout,
    handleCloseLogin,
    showLogin,
    show,
    handleShowLogin,
    handleShow,
    onSignup,
    handleClose,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [nickname, setNickname] = useState("");

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignupError, setIsSignupError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignup() {
    setIsSigningUp(true);
    setIsSignupError(false);
    try {
      await onSignup(email, password, firstname, nickname, confirmPassword);
    } catch (err) {
      console.log(err);
      setIsSignupError(true);
    } finally {
      setIsSigningUp(false);
    }
  }
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">First Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nickname</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSignup}
        >
          {isSigningUp ? "Signing up..." : "Sign up"}
        </button>
        {isSignupError && <p>Signup failed. Please try again.</p>}
      </form>
    </div>
  );
};

export default SignUp;
