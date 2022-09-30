import React from 'react'
import '../../styles/navbar.css';
import { Rotate as Hamburger } from 'hamburger-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <>
      <nav className='navbar justify-content-center display-6'>
        <div className='container-fluid'>
          <a className='navbar-brand text-dark' href='#'>RMJessica</a>
          <a className='navbar-item text-dark text-decoration-none' href='#'>Made with love</a>
          
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <Hamburger
                  className='navbar-toggler-icon mt-1 border-0'
                  size={30}
                  title='Perfil y barra buscadora'   
            />
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item fs-2'>
                <a className='nav-link text-center active link-dark color' aria-current='page' href='#'>ABOUT</a>
              </li>
              <li className='nav-item fs-2'>
                <a className='nav-link text-center link-dark color' href='#'>PROJECTS</a>
              </li>
              <li className='nav-item fs-2'>
                <a className='nav-link text-center link-dark color' href='#'>CONTACT</a>
              </li>
              <li className='nav-item fs-2'>
                <div className='d-flex justify-content-center'>
                  <div className='icon github me-2 color'>
                    <a
                      href='https://github.com/RMjessica'
                      className='link-dark color'
                      target='blank'
                    >
                      <BsGithub size={25}/>
                    </a>
                  </div>
                  <div className='icon linkedin'>
                    <a
                      href='https://www.linkedin.com/in/rmjessica/'
                      className='link-dark color'
                      target='blank'
                    >
                      <BsLinkedin size={25}/>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar