import React from 'react'
import '../../styles/contact.css';
import { WiStars } from "react-icons/wi";

const Contact = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='fw-light fst-italic my-3 fs-text-1'>Get in touch <WiStars className="text-warning"/></h1>
        <p>OR find me in these spaces:</p>

      </div>
      
      <div className='card pt-4 px-4 pb-2 shadow mx-5 mt-4 text-center' id='transparency'>
        <div className="card-body">
        <div className='row mb-2'>
          <div className='col'>
            <input type='text' className='form-control' placeholder='First name' aria-label='First name'/>
          </div>
          <div className='col'>
            <input type='text' className='form-control' placeholder='Last name' aria-label='Last name'/>
          </div>
        </div>

        <div className='mb-2'>
          <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='name@example.com'/>
        </div>

        <div className='mb-4'>
          <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' placeholder='Message'></textarea>
        </div>

        <button className='btn btn-sm btn-outline-dark ' id='shine'>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Contact