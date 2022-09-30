import React, { Component } from "react";
import Slider from "react-slick";
import todo from '../../../img/todo.png';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="container my-3">
        <h2 className="mb-3">Projects</h2>
        <Slider {...settings}>
          <div className=''>
            <div className='card me-1'>
              <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' alt='Wild Landscape'/>
              <div className='card-body'>
                <h5 className='card-title'>Todo List</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
              </div>
            </div>
          </div>

          <div className="">
            <div className='card me-1'>
              <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' alt='Wild Landscape'/>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
              </div>
            </div>
          </div>
          
          <div>
            <div className='card me-1'>
              <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' alt='Wild Landscape'/>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
              </div>
            </div>
          </div>

          <div>
            <div className='card me-1'>
              <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' alt='Wild Landscape'/>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <a href='https://github.com/RMjessica/improved-todo-list' className='text-muted'>Link to repository</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}