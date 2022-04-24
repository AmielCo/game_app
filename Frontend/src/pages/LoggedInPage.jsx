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
      <div className="home-page-cont ">
        <div className="home-page-content">
          <h2>Welcome to the Memory Game {currentUser.username}</h2>

          <h3>Last Score: {recentScore}</h3>
          <h3>High Score: {highScore}</h3>

          <p>
            The goal of the game is to find all the pairs of cards. The cards
            are shuffled and then each card is shown to the player. The player
            then clicks on a card and the card is flipped. If the card is a
            match, the player can click on another card. If the cards are a
            match, the cards remain flipped. If the cards are not a match, the
            cards are flipped back over. The player must try to find all the
            pairs of cards.
          </p>
          <p>The best score possible is 6 turns.</p>
          <p>
            Good luck and have as much fun as you can with this wonderful
            wonderful game.
          </p>
          <div className="button-container">
            <button className="btn">
              {" "}
              <NavLink to="/Game">Start Playing</NavLink>
            </button>
           

            <Logout />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInPage;
