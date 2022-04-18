import React from "react";
import "./App.css";
import Game from "./components/Game";
import HomePage from "./pages/HomePage";
import AuthProvider from "./components/AuthProvider";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoggedInPage from "./pages/LoggedInPage";




function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/LoggedInPage" element={<LoggedInPage />} />

        <Route path="/Game" element={<Game />} />
        {/*  <Game/> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
