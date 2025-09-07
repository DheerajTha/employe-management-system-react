import React from "react";

const TaskList = () => {
  return (
    <>
      <div
        className="flex gap-5 mt-10 px-4 py-2 bg-white rounded-md w-full 
                shadow-sm border-b-[3px] border-blue-600 hover:shadow-lg 
                overflow-x-auto scroll-smooth"
      >
        <div className="min-w-[200px] py-5 px-9 rounded-2xl bg-red-600">
          <div className="">
            <h1>Task List</h1>
            <h4>9/8/2025</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.</p>
          </div>
        </div>
                <div className="min-w-[200px] py-5 px-9 rounded-2xl bg-green-600">
          <div className="">
            <h1>Task List</h1>
            <h4>9/8/2025</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.</p>
          </div>
        </div>
                <div className="min-w-[200px] py-5 px-9 rounded-2xl bg-blue-600">
          <div className="">
            <h1>Task List</h1>
            <h4>9/8/2025</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.</p>
          </div>
        </div>
                <div className="min-w-[200px] py-5 px-9 rounded-2xl bg-yellow-600">
          <div className="">
            <h1>Task List</h1>
            <h4>9/8/2025</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
