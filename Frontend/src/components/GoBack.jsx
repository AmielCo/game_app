import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/LoggedInPage");
  };

  return <button onClick={goBack}>Go Back to Home page</button>;
};

export default GoBack;
