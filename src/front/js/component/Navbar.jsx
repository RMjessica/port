import React from "react"
import { Rotate as Hamburger } from 'hamburger-react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar justify-content-center display-6">
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="#">RMJessica</a>
          <a className="navbar-item text-dark text-decoration-none" href="#">Made with love</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <Hamburger
                  className="navbar-toggler-icon mt-1 border-0"
                  size={30}
                  title="Perfil y barra buscadora"   
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <div className="wrapper">
                  <div className="icon github">
                    <a
                      href="https://github.com/RMjessica"
                      className="link-dark"
                      target="blank"
                    >
                      <BsGithub size={25}/>
                    </a>
                  </div>
                  <div className="icon linkedin">
                    <a
                      href="https://www.linkedin.com/in/rmjessica/"
                      className="link-dark"
                      target="blank"
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