import React from 'react'
import Intro from '../component/Intro'
import About from '../component/About'
import Tech from '../component/Tech'
import Gallery from '../component/Projects/Gallery'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
      <Intro text={"Driven"} />
      <About />
      <Tech />
      <Gallery />
      <div className='m-5'>
        <Contact />
      </div>
    </div>
  )
}

export default Home