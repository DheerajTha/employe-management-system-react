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

  const loggedInUser = localStorage.getItem("loggedInUser");
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }

  },[] );

  // localStorage.clear()


  const handlerLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log(user, "user not found");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );

      console.log("employee", employee);
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("login failed");
    }
  };

  return (
    <div>
      {!user ? <Login handlerLogin={handlerLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}
      
    </div>
  );
};

export default App;
