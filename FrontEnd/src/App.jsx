import React from 'react'
import Home from '../src/home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import About from './About/About'
import Contact from './components/Contact'
import { Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './Context/AuthProvider'
import Admin from './Admin/Admin'

import Demo from './Admin/Demo'

import AdminLogin from './Admin/AdminLogin'







function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);


  return (
   <>
 
      {/* <AdminLogin/> */}

{/* 
      <Admin/> */}

   

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Course' element={authUser?<Courses/> :<Navigate to="/Signup"/> }></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
    </Routes>

    <Toaster/>


   </>
  )
}

export default App
