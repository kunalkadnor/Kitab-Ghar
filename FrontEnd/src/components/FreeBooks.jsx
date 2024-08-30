import React, { useEffect, useState } from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';

import axios from 'axios';


  function FreeBooks() {

   const [book,setBook]=useState([])

   useEffect(()=>{

    const mybook=async ()=>{
      try{

        const res=await axios.get('http://localhost:4001/book')
        setBook(res.data);
        setBook(res.data.filter((book)=>{
          console.log('shelke ----',book)
          return  book.category==='Free'
        }));
    }catch(err){
      console.log(err)
  
    }
    }
    mybook();

   },[])
   
  







    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1.8,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1.3,
              initialSlide: 0
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };













  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  mt-10 '>
       <div>
       <h1 className='font-semibold  text-xl pb-2'>Free Offered Courses....</h1>
        <p>We are a bookstore with a unique collection of books spanning across various categories. From subjects like law, medicine, psychology, accountancy, economics, sociology, defence, yoga and meditation – there is a book for almost every need! With our aim of 100% customer satisfaction, customers keep visiting us again and again.</p>
       </div>
   

    <div>
    <Slider {...settings}>
       
        {
            book.map((item)=>(<Cards item={item} key={item.id}/>))
        }
      </Slider>
    </div>

    </div>




    </>
  )
}

export default FreeBooks;
