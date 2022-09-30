import React from 'react'
import Intro from '../component/Intro'
import About from '../component/About'
import Tech from '../component/Tech'
import Gallery from '../component/Projects/Gallery'
import Contact from '../component/Contact'
import '../../styles/home.css';

const Home = () => {
  return (
    <div className='container'>
        <Intro text={"Driven"} />
      <hr className='margin'></hr>
        <About />
      <hr className='margin'></hr>
        <Tech />
      <hr className='margin'></hr>
        <Gallery />
      <hr className='margin'></hr>
        <Contact />
    </div>
  )
}

export default Home