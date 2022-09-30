import React, { Component } from 'react';
import Slider from 'react-slick';
import { GiPotionBall } from "react-icons/gi";
import todo from '../../../img/todo.png';

export default class MultipleItems extends Component {
/*   const (display, setDisplay)  useState(); */
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className='container'>
        <h1 className='fw-light fst-italic my-3 mb-4'>Projects {/* <GiPotionBall /> */}</h1>
        
          <Slider className='m-auto' style={{ height: '50%', width: '94%' }} {...settings}>
            <>
              <div className='card me-1 ' id='transparency'>
                <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top img-fluid' alt='Todo List'/>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Todo List</h5>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted' >Link to repository</a>
                </div>
              </div>
            </>

            <>
              <div className='card me-1' id='transparency'>
                <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top img-fluid' alt='Wild Landscape'/>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Card title</h5>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
                </div>
              </div>
            </>
            
            <>
              <div className='card me-1' id='transparency'>
                <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top img-fluid' alt='Wild Landscape'/>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Card title</h5>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
                </div>
              </div>
            </>

            <>
              <div className='card me-1' id='transparency'>
                <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top img-fluid' alt='Wild Landscape'/>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Card title</h5>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
                </div>
              </div>
            </>
          </Slider>
          
        </div>
    );
  }
}