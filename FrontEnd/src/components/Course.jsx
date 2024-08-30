import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'

import axios from 'axios'

function Course() {

  const [book,setBook]=useState([]);
  useEffect(()=>{

    const mybook=async ()=>{

     try{
      console.log('my name is ashwin')
      const res= await axios.get('http://localhost:4001/book');
      console.log(res.data)
      setBook(res.data)
     }catch(err){
      console.log('hi')
      console.log(err)
     }
    };
    mybook();
  },[])


  return (
    <>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  mt-10 '>

      <div className='mt-28 items-center justify-center text-center'>
         
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>

          <p className='mt-12'>
          "It wasn't until I started reading and found books they wouldn't let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else." – John Waters
          </p>

         <Link to={'/'}>
         <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
         </Link>

      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>


        {
          book.map((item)=>(
            <Cards item={item} key={item.id}></Cards>
          ))
        }
        
      </div>


    </div>


    </>
  )
}

export default Course
