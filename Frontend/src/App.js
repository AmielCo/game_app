import React from "react";
import "./App.css";
import Game from "./components/Game";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoggedInPage from "./pages/LoggedInPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ScoreContextProvider } from "./contexts/ScoreContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <ScoreContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route
            path="/LoggedInPage"
            element={
              <ProtectedRoute>
                <LoggedInPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Game"
            element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            }
          />
          {/*  <Game/> */}
        </Routes>
      </ScoreContextProvider>
    </AuthContextProvider>
  );
}

export default App;
