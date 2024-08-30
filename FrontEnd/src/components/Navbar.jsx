import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useAuth } from '../Context/AuthProvider'

import Logout from './Logout'


function Navbar() {
  
  const[authUser,setAuthUser]=useAuth();
  

const [sticky,setSticky] = useState(false)

useEffect(()=>{

  const scrollHandler=()=>{

    if(window.scrollY>0){
      setSticky(true)
    }else{
      setSticky(false);
    }
  }

    window.addEventListener('scroll',scrollHandler);
    return ()=>{
        window.removeEventListener('scroll',scrollHandler);
    }
  
},[])

    const navItems=(
        <>



  

   <li>
    <Link to="/">Home</Link>
   </li>
   <li>
    <Link to="/Course">MyCourse</Link>
   </li>

   <li>
    <Link to="/About">About</Link>
   </li>

   <li>
    <Link to="/Contact">Contact</Link>
   </li>

   <li >
    <Link to={"/Admin"} >Admin</Link>

   </li>
     
        </>
    )
  return (
    <>
    <div  className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky?"sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out":""}`}>
    <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {
        navItems
     }
      </ul>
    </div>

    <div className="avatar">
  <div className=" rounded cursor-pointer md:w-20 w-12" >
    <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A21TJRUUN4KGV/8243c5cc48ca476be3f94bd2de38695e.w2700.h2100._CR0%2C0%2C2700%2C2100_SX200_.jpg" />
  </div>
</div>
    {/* <a className=" text-1xl font-bold cursor-pointer"></a> */}
  </div>
  <div className="navbar-end space-x-3">  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navItems
     }
    </ul>
  </div>
  <div className='hidden md:block bg-white' >
  <label className=" border px-3 py-2 rounded-md flex items-center gap-2">
  <input type="text" className="grow outline-none" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
  </div>
 
 {
  authUser?(<Logout/>):(

    <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer "
    onClick={()=>{
      document.getElementById('my_modal_3').showModal();
    }}>Login</a>
      <Login/>
  </div>

  )
 }
  

</div>
    </div>
    </div>
    </>
  )
}

export default Navbar
