import React from 'react'
import Navbar from '../components/Navbar'

import Banner from '../components/Banner'
import FreeBooks from '../components/FreeBooks';
import Footer from   '../components/Footer'


 function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <FreeBooks></FreeBooks>
    <Footer></Footer>
      
    </div>
  )
}

export default Home;
