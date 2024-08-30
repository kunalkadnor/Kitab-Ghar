
import React from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import Admin from './Admin';

function AdminLogin() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit=  (data) =>{ console.log(data)  


   
    console.log('ashwin helloo')
    if(data.email=='admin@gmail.com' && data.password=='123'){
    console.log('hi');
    toast.success("Loggedin Successfully");

   
    
    }else{
      toast.error("Incorect Credential");
    }


  } // React Hook Form Code

  
  return (
    <div>


      <div className='flex h-screen items-center justify-center'>


<div className="w-[600px]">
<div className="modal-box">
<form method="dialog"    onSubmit={handleSubmit(onSubmit)}   >
  {/* if there is a button in form, it will close the modal */}
 <Link to={'/'}> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>




<h3 className="font-bold text-lg">Welcom Admin</h3>



{/* Email */}

<div className='mt-4 space-y-2'>

  <span>Email</span>
  <br/>
  <input type='email' name='email' placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'  
     {...register("email", { required: true })}

  />
   <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

</div>

{/* Password */}

<div className='mt-4 space-y-2'>

  <span>Password</span>
  <br/>
  <input name='password' type='password' placeholder='Enter Your Password' className='w-80 px-3  py-1 border rounded-md outline-none'
        {...register("password", { required: true })}
 
  />

<br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

</div>


{/* Button */}

<div className='flex justify-between mt-4'>
  <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
</div>

</form>

</div>
</div>
  
</div>
      
    </div>
  )
}

export default AdminLogin
