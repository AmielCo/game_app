import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {

  return (
    <div>
      <h1>Welcome to the Memory Game!</h1>
      <p>Click on the cards to see if you can match them!</p>

      <div className="button-container">

      <button className="btn"> <NavLink to="/Signup">Sign Up</NavLink></button>
      <button className="btn"> <NavLink to="/Login">Login</NavLink></button>
      </div>
    
    </div>
  );
};

export default HomePage;
