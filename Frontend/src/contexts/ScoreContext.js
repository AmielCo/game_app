import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";

const ScoreContext = React.createContext();

export function useScoreContext() {
  return useContext(ScoreContext);
}

export function ScoreContextProvider({ children }) {
  const [recentScore, setRecentScore] = useState([]);
  const [highScore, setHighScore] = useState([]);
  const { currentUser } = useAuthContext();

  const getRecentScore = (id) => {
    console.log(id);
    axios.get(`http://localhost:8080/scores/lastScore/${id}`).then((res) => {
      if (res.data[0]) {
        setRecentScore(res.data[0].score);
      } else {
        setRecentScore(null);
      }
    });
  };

  const getHighScore = (id) => {
    console.log(id);
    axios.get(`http://localhost:8080/scores/highScore/${id}`).then((res) => {
      if (res.data[0]) {
        setHighScore(res.data[0].score);
      } else {
        setHighScore(null);
      }
    });
  };

  const sendScore = (score) => {
    let newScore = {
      userId: currentUser.id,
      score: score,
    };
    axios
      .post(`http://localhost:8080/scores/addScore`, newScore)
      .then((res) => {
        if (res) {
          setRecentScore(score);
          getHighScore(currentUser.id);
          alert("Score Sent");
        }
      });
  };

  useEffect(() => console.log(highScore), [highScore]);

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      getRecentScore(currentUser.id);
      getHighScore(currentUser.id);
    }
  }, [currentUser]);

  return (
    <ScoreContext.Provider
      value={{
        recentScore,
        sendScore,
        getRecentScore,
        getHighScore,
        highScore,
      }}
    >
      {" "}
      {children}
    </ScoreContext.Provider>
  );
}
