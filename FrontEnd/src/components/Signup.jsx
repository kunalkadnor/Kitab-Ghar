

import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';

import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

 function Signup() {

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    console.log(data)
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }

    await axios.post('http://localhost:4001/user/signup',userInfo).then((res)=>{
          if(res.data){
            
            toast.success('Signup Successfully..')
          }
          console.log('-->',data);
          localStorage.setItem("Users",JSON.stringify(data));
    }).catch((err)=>{

     if(err.message=='Request failed with status code 400'){
  

      toast.error('User Already Exist')
     }
    
      
    })
  }


  return (
 
    <>

    <div className='flex h-screen items-center justify-center'>


    <div className="w-[600px]">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}  >
      {/* if there is a button in form, it will close the modal */}
     <Link to={'/'}> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    
    
    
    
    <h3 className="font-bold text-lg">Signup</h3>

    {/* Name */}

    <div className='mt-4 space-y-2'>

      <span>Name</span>
      <br/>
      <input type='text' name='fullname' placeholder='Enter Your Full Name' className='w-80 px-3 py-1 border rounded-md outline-none'

      {...register("fullname", { required: true })}
      
      />
       <br/>
         {errors.fullname && <span className='text-sm text-red-500'>* Name is required</span>}
    </div>

   

    {/* Email */}

    <div className='mt-4 space-y-2'>

      <span>Email</span>
      <br/>
      <input type='email' name='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'  
        {...register("email", { required: true })}
    
      />
       <br/>
         {errors.email && <span className='text-sm text-red-500'>* Email is required</span>}
    </div>

    {/* Password */}

    <div className='mt-4 space-y-2'>

      <span>Password</span>
      <br/>
      <input name='password' type='password' placeholder='Enter Your Password' className='w-80 px-3  py-1 border rounded-md outline-none'
       
      {...register("password", { required: true })}
      />

<br/>
{errors.Password && <span className='text-sm text-red-500'>* Password is required</span>}
    </div>


    {/* Button */}

    <div className='flex justify-between mt-4'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>

      <p>Already Have An Account? <button className='underline text-blue-500 cursor-pointer' onClick={()=>{
      document.getElementById('my_modal_3').showModal();
      
      } } >Login</button><Login/></p>
   
    </div>

    </form>
    
  </div>
</div>
      
    </div>
        
    </>


  )
}
export default Signup;
