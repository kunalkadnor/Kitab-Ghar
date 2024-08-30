
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


import bookimg from '../../public/bookimg.jpg'



function Banner() {



        const [text] = useTypewriter({
          words: ['New Everyday !!!', 'From Kitab Ghar.'],
          loop: 0,
          
        })
    
      

    
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1  " >
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome Here To Learn Something{" "}
              <span className="text-pink-500">{text}</span>
              <Cursor/>
            </h1>
            <div>
              <p className="text-xl">
                Ever lusted over a book but had to control yourself because it
                was too expensive?
              </p>
              <p className="my-6 text-xl">
                Worry not! Because Ktab Ghar is here to answer all your literary
                prayers. Knowledge is priceless but the books come with a bill
                and the Ktab Ghar is committed to bring to you the best of the
                brilliant from the world of written text, at prices which are
                literally a penny saved is a penny earned
              </p>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
          </div>
          <a href='mailto:ashwinkumarshelke9@gmail.com'><button className="btn btn-secondary my-6">Send email</button></a>
        </div>

        <div className="w-full md:w-1/2 order-1">
           <img src={bookimg} className='w-92 h-92 '  />
        
        </div>
      </div>
   
      


      
    </>
  );
}


export default Banner;
