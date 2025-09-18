import React, { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  console.log("user data", userData);
  console.log(userData)

  return (
    <>
      <div>
        <authContext.Provider value={userData}>
          {children}
        </authContext.Provider>
      </div>
    </>
  );
};

export default AuthProvider;
