import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/dashboard/adminDashboard";
import Login from "./components/auth/login";
import EmployeeDashboard from "./components/dashboard/employeeDashboard";
import { authContext } from "./context/authProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const authData = useContext(authContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
      }
    }
  }, [authData]);

  console.log(user, 'user');

  const handlerLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log(user, "user not found");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("login failed");
    }
  };

  return (
    <div>
      {!user ? <Login handlerLogin={handlerLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;
