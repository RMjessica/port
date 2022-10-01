import React from 'react'
import { GrTechnology } from 'react-icons/gr';
import icons from '../tech-icons';

const Tech = () => {
  return (
    <div className='container'>
      <h1 className='fw-light fst-italic my-3'>Technologies <GrTechnology /></h1>

      <div className='d-flex m-1 row row-cols-1 row-cols-md-2' style={{ width: '97%' }}>
        <h3 className='text-center fw-light m-auto p-5'>These are some of the technolgies I'm most familiar with. Suspendisse id consectetur est. Pellentesque sit amet ex in nisi posuere ornare. Phasellus dictum diam sit amet interdum aliquet. Etiam vitae mi vel libero tristique finibus non ac ligula.</h3>

        <div className='card shadow p-4 fw-light' id='transparency'>
          <div className='text-center row row-cols-4'>
            {Object.keys(icons).map((key, i) => (
              <p key={i}>
                <span>{key}</span>
                <span>Value: {sampleJSON[key]}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech