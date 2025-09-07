import React from "react";
import Navbar from "../other/navbar";
import AllTask from "../taskList/allTask";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-auto w-[90%]">
        
        {/* Left - All Tasks */}
        <div className="space-y-4">
          <AllTask />
          <AllTask />
          <AllTask />
          <AllTask />
          <AllTask />
          <AllTask />
          <AllTask />
          <AllTask />
          
        </div>

        {/* Right - Create Task Form */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg space-y-5">
          {/* Header */}
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>←</span> Create Task
          </h2>

          {/* Task Title */}
          <div>
            <label className="block text-gray-300 mb-1">Task Title</label>
            <input
              type="text"
              name="title"
              placeholder="Make a UI design"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-1">Description</label>
            <textarea
              name="description"
              rows="2"
              placeholder="Detailed description of the task."
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-300 mb-1">Date</label>
            <input
              type="date"
              name="date"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-gray-300 mb-1">Assign To</label>
            <input
              type="text"
              name="assignTo"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Design, Development, etc..."
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-700 transition"
          >
            Create Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
