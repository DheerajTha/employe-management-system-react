import React from 'react'

const AllTask = () => {
  return (
    <>
    <div className="bg-gray-800 text-gray-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-md hover:shadow-lg transition mb-3">
      
      {/* Left side - Task Info */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Make a UI Design</h3>
        <p className="text-sm text-gray-400">Due: 10/09/2025 • Assigned to: John Doe</p>
      </div>

      {/* Right side - Category + Action */}
      <div className="flex items-center gap-3">
        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Design
        </span>
        <button className="px-3 py-1 text-sm bg-red-600 rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>

    </>
  )
}

export default AllTask;