import React from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Logout = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
