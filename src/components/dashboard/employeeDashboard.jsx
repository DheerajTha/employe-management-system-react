import React from "react";
import Navbar from "../other/navbar";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({data}) => {

  
  return (
    <>
      <div className="p-10 h-screen  bg-gray-900">
        <Navbar data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
