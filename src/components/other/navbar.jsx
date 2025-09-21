import React from 'react'

const Navbar = () => {

  // const [userName,setUserName] = useState('')

  // if(!data){
  //   setUserName("Admin")
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  // console.log(userName)

const logOurUser = () =>{
  localStorage.setItem('loggedInUser',"")
  window.location.reload()

}


  return (
    <>
    <div className='flex justify-between items-center  p-4'>
        <h1 className='text-2xl text-white font-bold'>Hello <span className='text-3xl text-blue-500'> userName 😊</span> </h1>
    <button onClick={logOurUser} className='text-xl  bg-red-600 px-8 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out cursor-pointer'>Log Out</button>
    </div>
    </>
  )
}

export default Navbar;