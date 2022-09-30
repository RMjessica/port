import React from 'react'

const Project = () => {
  return (
    <div className='card mb-3'>
      <img 
        src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='card-img-top' 
        alt='Wild Landscape'
      />
      <div className='card-body'>
        <h5 className='card-title text-center'>Card title</h5>
        <p className='card-text'>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>
        <p className='card-text'>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  )
}

export default Project