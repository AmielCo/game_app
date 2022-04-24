/* 
  Signup Component (inside a modal):
Should take an email address 
Password (twice to make sure passwords match)
First and last name
Phone number
*/

import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { useAuthContext } from "../contexts/AuthContext";
import GoBackToMain from "./GoBackToMain";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const { signup, error } = useAuthContext();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSignup = () => {
    if (password === confirmPassword) {
      let new_user = {
        email: email,
        name: name,
        username: username,
        password: password,
      };
      signup(new_user);
    }
  };

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
            onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nickname</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Nickname"
            onChange={handleUsername}
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
            onChange={handleEmail}
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
            onChange={handlePassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            onChange={handleConfirmPassword}
          />
        </div>
        {error && <div>Your information is incorrect.</div>}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignup}
        >
          {" "}
          Submit
        </button>
        <GoBackToMain />
      </form>
    </div>
  );
};

export default SignUp;
