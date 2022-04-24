import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackToMain = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return <button onClick={goBack}>Go Back to Home Page</button>;
};

export default GoBackToMain;
