import React from 'react'

const TaskListNum = ({data}) => {

    console.log(data)
  return (
    <>
   <div className="grid gap-5 mt-10 px-4 py-2 bg-white rounded-md w-full shadow-sm border-b-[3px] border-blue-600 hover:shadow-lg
                grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
    <div className='py-5 px-9 rounded-2xl bg-red-600'>
        <h1 className='text-2xl font-bold text-gray-800'>Active Tasks</h1>
        <p className='text-lg font-bold text-gray-800'> {data.taskCounts.active} </p>
    </div>    <div className='py-5 px-9 rounded-2xl bg-green-600'>
        <h1 className='text-2xl font-bold text-gray-800'>NewTask Tasks</h1>
        <p className='text-lg font-bold text-gray-800'>{data.taskCounts.newTask}</p>
    </div>
    <div className='py-5 px-9 rounded-2xl bg-blue-600'>
        <h1 className='text-2xl font-bold text-gray-800'>Completed Tasks</h1>
        <p className='text-lg font-bold text-gray-800'>{data.taskCounts.completed}</p>
    </div>
    <div className='py-5 px-9 rounded-2xl bg-yellow-600'>
        <h1 className='text-2xl font-bold text-gray-800'>Failed Tasks</h1>
        <p className='text-lg font-bold text-gray-800'>{data.taskCounts.failed}</p>
    </div>
</div>



    </>
  )
}

export default TaskListNum