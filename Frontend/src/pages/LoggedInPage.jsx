import React from "react";
import { NavLink } from "react-router-dom";
import "./LoggedInPage.css";
import Logout from "../components/Logout";
import { useAuthContext } from "../contexts/AuthContext";
import { useScoreContext } from "../contexts/ScoreContext";

const LoggedInPage = () => {
  const { currentUser } = useAuthContext();
  const { recentScore, highScore } = useScoreContext();

  return (
    <div className="container">
      <h1>Welcome to the Memory Game {currentUser.username}</h1>

      <h2>Last Score: {recentScore}</h2>
      <h2>High Score: {highScore}</h2>

      <button className="btn">
        {" "}
        <NavLink to="/Game">Start Playing</NavLink>
      </button>
      <Logout />
    </div>
  );
};

export default LoggedInPage;
