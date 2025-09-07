import React from "react";
import Navbar from "../other/navbar";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 h-screen  bg-gray-900">
        <Navbar />
        <TaskListNum/>
        <TaskList/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
