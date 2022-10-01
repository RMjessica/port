import React, { Component } from 'react';
import Project from '../../component/Projects/Project';
import Slider from 'react-slick';
import { GiPotionBall } from "react-icons/gi";
import todo from '../../../img/todo.png';

const Carousel = () => {
/*   const (display, setDisplay)  useState(); */
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className='container'>
      <h1 className='fw-light fst-italic my-3 mb-4'>Projects <GiPotionBall /></h1>
      
        <Slider className='m-auto' {...sliderSettings}>
          <Project />

          <Project />
          
          <Project />

          <Project />
        </Slider>
      </div>
  );
};

export default Carousel;