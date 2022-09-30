import React from 'react';
import Navbar from '../js/component/Navbar'
import Home from '../js/views/Home'
import Footer from '../js/component/Footer'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div id="light" className='h-100'>
      <Navbar />
        <Home />
      <Footer />
			
    </div>
  );
}