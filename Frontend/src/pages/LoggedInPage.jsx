import React from 'react'
import { NavLink } from "react-router-dom";
import "./LoggedInPage.css";


const LoggedInPage = () => {
  return (
      <div className="container">
       
          <h1>Welcome to the Memory Game + Nickname!</h1>

          <h2>Last Score: </h2>
          <h2>High Score: </h2>
          
          <button className="btn"> <NavLink to="/Game">Start Playing</NavLink></button>
          
          

    </div>
  )
}

export default LoggedInPage