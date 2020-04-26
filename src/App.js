import React from "react";
import { useAuth } from "./context/AuthProvider";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const App = () => {
  const {auth} = useAuth();

  console.log(auth);


  return auth && auth.token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
