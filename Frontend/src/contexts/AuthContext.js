import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AuthContext = React.createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState("false");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    let user = {
      email: email,
      password: password,
    };
    console.log(user);
    await axios.post("http://localhost:8080/users/login", user).then((res) => {
      if (res.status === 201) {
        setCurrentUser(res.data.user[0]);
        setAuth(true);
        navigate("/LoggedInPage");
      }
    });
  };

  const logout = () => {
    {
      setCurrentUser(null);
      setAuth(false);
    }
  };

  const signup = (user) => {
    console.log(user);
    axios
      .post("http://localhost:8080/users/signup", user)
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          setError(false);

          login(user.email, user.password);
        } else {
          setError(true);
        }
      })
      .catch((err) => { setError(true); console.log(err)});
  };

  useEffect(() => console.log(error), [error]);

  return (
    <AuthContext.Provider
      value={{ auth, login, currentUser, logout, signup, error }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
}
