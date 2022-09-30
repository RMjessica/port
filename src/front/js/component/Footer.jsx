import React from 'react';
import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => (
	<div className='my-5 fw-light mb-0'>
  <footer
		className='text-center text-lg-start text-white'
		style={{background: 'rgba(237, 208, 75, 0.249)'}}
		>

    <section 
			className='d-flex justify-content-between p-3' 
			style={{background: 'rgba(237, 208, 75, 0.249)'}}
		>

      <div className='me-5'>
        <span style={{color: 'rgb(36, 36, 35)'}}>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='text-white me-4 visually-hidden'>
          <GrFacebookOption />
        </a>
        <a href='https://github.com/RMjessica' className='text-white me-4'>
					<GrGithub />
        </a>
        <a href='https://www.linkedin.com/in/rmjessica' className='text-white me-4'>
					<GrLinkedinOption />
        </a>
        <a href='' className='text-white me-4 visually-hidden'>
          <GrInstagram />
        </a>
      </div>
    </section>

    <section>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>

            <h6 className='text-uppercase fw-bold'>Jessica Rojas Mosquera</h6>
            <hr
                className='mb-4 mt-0 d-inline-block mx-auto'
                style={{width: '60px', background: 'rgb(187, 156, 100)', height: '2px'}} 
                />
            <p style={{color: 'rgb(36, 36, 35)'}}>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
  
            <h6 className='text-uppercase fw-bold'>Contact</h6>
            <hr
                className='mb-4 mt-0 d-inline-block mx-auto'
                style={{width: '60px', background: 'rgb(187, 156, 100)', height: '2px'}} 
                />
            <p style={{color: 'rgb(36, 36, 35)'}}><BsFillEnvelopeFill /> hello@rmjessi.ca</p>
          </div>
        </div>
      </div>
    </section>


    <div
         className='text-center p-3'
         style={{background: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2022 Copyright
      <a className='text-white visually-hidden' href='https://mdbootstrap.com/'
         > Jessica Rojas Mosquera</a
        >
    </div>

  </footer>


</div>

);

export default Footer;