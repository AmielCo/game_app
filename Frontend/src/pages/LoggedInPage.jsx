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

      <p>
        Memory has long been a favorite game for all generations. It is easy to
        play, in fact it is so simple that really young children can play with
        ease. It requires observation, concentration and a good memory to win.{" "}
        The game is also known as Concentration, Pelmanism, Shinkei-suijaku,
        Pexeso and Pairs.
      </p>

      <p>
        The goal of the game is to find all the pairs of cards. The cards are
        shuffled and then each card is shown to the player. The player then
        clicks on a card and the card is flipped. If the card is a match, the
        player can click on another card. If the cards are a match, the cards
        remain flipped. If the cards are not a match, the cards are flipped back
        over. The player must try to find all the pairs of cards.
      </p>

      <p>The best score possible is 6 turns.</p>

      <p>
        {" "}
        Good luck and have as much fun as you can with this wonderful wonderful
        game.
      </p>

      <button className="btn">
        {" "}
        <NavLink to="/Game">Start Playing</NavLink>
      </button>
      <Logout />
    </div>
  );
};

export default LoggedInPage;
