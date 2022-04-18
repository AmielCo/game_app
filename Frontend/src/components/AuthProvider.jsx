import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  //SignupModal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //LoginModal
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  //state for the active user
  const [activeUser, setActiveUser] = useState(null);

  //Login function

 /*  async function handleLogin(email, password) {
    const user = await login(email, password);
    handleCloseLogin();
    setActiveUser(user);
    navigate("/:userId/HomePageLoggedIn");
  } */

  //signup function
 /*  async function handleSignup(
    email,
    password,
    firstname,
    lastname,
    phonenumber,
    confirmPassword
  ) {
    const user = await signup(
      email,
      password,
      firstname,
      lastname,
      phonenumber,
      confirmPassword
    );
    handleClose();
    setActiveUser(user);
    navigate("/:userId/HomePageLoggedIn");
  } */

  //Logout function
  function handleLogout() {
    setActiveUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        activeUser,
        /* onSignup: handleSignup,
        onLogin: handleLogin, */
        onLogout: handleLogout,
        handleCloseLogin,
        showLogin,
        show,
        handleShowLogin,
        handleShow,
        handleClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
