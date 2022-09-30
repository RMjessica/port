import React from 'react';
import Navbar from '../js/component/Navbar'
import Intro from '../js/component/Intro'
import About from '../js/component/About'
import Tech from '../js/component/Tech'
import Gallery from '../js/component/Projects/Gallery'
import Contact from '../js/component/Contact'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div id="light">
      <Navbar />
      <Intro text={"Driven"} />
      <About />
      <Tech />
      <Gallery />
      <Contact />
			
    </div>
  );
}