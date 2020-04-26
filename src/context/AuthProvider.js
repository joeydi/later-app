import React, { createContext, useState } from "react";
import { client, localStorageKey } from "../utils/api-client";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const initialState = JSON.parse(window.localStorage.getItem(localStorageKey));

  const [auth, setAuth] = useState(initialState);

  const login = (username, password) => {
    return client("login/", { body: { username, password } }).then((data) => {
      window.localStorage.setItem(localStorageKey, JSON.stringify(data));
      setAuth(data);
    });
  };

  const logout = () => {
    window.localStorage.removeItem(localStorageKey);
    setAuth(null);
  };

  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);
