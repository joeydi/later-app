import React from "react";
import { useAuth } from "./AuthProvider";

const UserContext = React.createContext();

const UserProvider = (props) => <UserContext.Provider value={useAuth().user} {...props} />;

export default UserProvider;

export const useUser = () => React.useContext(UserContext);
