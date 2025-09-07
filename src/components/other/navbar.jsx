import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center  p-4'>
        <h1 className='text-2xl text-white font-bold'>Hello <span className='text-3xl text-blue-500'>Dheeraj 😊</span> </h1>
    <button className='text-xl  bg-red-600 px-8 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out cursor-pointer'>Log Out</button>
    </div>
    </>
  )
}

export default Navbar;