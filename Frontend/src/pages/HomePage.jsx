import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {

  return (
    <div className="home-page-cont ">
      <div className="home-page-content">
        <h1>Welcome to the Memory Game!</h1>
        <p>You will never forget the time you will spend here!</p>

        <div className="button-container">
          <button className="btn">
            {" "}
            <NavLink to="/Signup">Sign Up</NavLink>
          </button>
          <button className="btn">
            {" "}
            <NavLink to="/Login">Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
