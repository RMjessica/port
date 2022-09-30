import React from 'react'
import { GrTechnology } from 'react-icons/gr';
/* import '../../styles/tech.css' */

const Tech = () => {
  return (
    <div className='container'>
      <h1 className='fw-light fst-italic my-3'>Technologies <GrTechnology /></h1>

      <div className='d-flex m-1 row row-cols-1 row-cols-md-2' style={{ width: '97%' }}>
        <h3 className='text-center fw-light m-auto p-5'>These are some of the technolgies I'm most familiar with. Suspendisse id consectetur est. Pellentesque sit amet ex in nisi posuere ornare. Phasellus dictum diam sit amet interdum aliquet. Etiam vitae mi vel libero tristique finibus non ac ligula.</h3>

        <div className='card shadow p-4' id='transparency'>
          <div className='text-center row row-cols-5'>
            <div>
              <i className='devicon-javascript-plain fs-2'></i>
              <p>Javascript</p>
            </div>
            <div>
              <i className='devicon-python-plain fs-2'></i>
              <p>Python</p>
            </div>
            <div>
              <i className='devicon-flask-original fs-2'></i>
              <p>Flask</p>
            </div>
            <div>
              <i className='devicon-sqlalchemy-plain fs-2'></i>
              <p>SQLAlchemy</p>
            </div>
            <div>
              <i className='devicon-babel-plain fs-2'></i>
              <p>Babel</p>
            </div>
            <div>
            <i className='devicon-bash-plain fs-2'></i>
              <p>Bash</p>
            </div>
            <div>  
              <i className='devicon-bootstrap-plain fs-2'></i>
              <p>Bootstrap</p>
            </div>
            <div>
              <i className='devicon-figma-plain fs-2'></i>
              <p>Figma</p>
            </div>
            <div>
              <i className='devicon-firebase-plain fs-2'></i>
              <p>Firebase</p>
            </div>
            <div>
              <i className='devicon-firebase-plain fs-2'></i>
              <p>Git</p>
            </div>
            <div>
              <i className='devicon-html5-plain fs-2'></i>
              <p>Html5</p>
            </div>
            <div>
            <i className='devicon-css3-plain fs-2'></i>
              <p>Ccss3</p>
            </div>
            <div>
              <i className='devicon-html5-plain fs-2'></i>
              <p>Jest</p>
            </div>
            <div>
              <i className='devicon-jquery-plain fs-2'></i>
              <p>JQuery</p>
            </div>
            <div>
              <i className='devicon-materialui-plain fs-2'></i>
              <p>MaterialUI</p>
            </div>
            <div>
              <i className='devicon-nodejs-plain fs-2'></i>
              <p>Nodejs</p>
            </div>
            <div>
              <i className='devicon-nodejs-plain fs-2'></i>
              <p>React</p>
            </div>
            <div>
              <i className='devicon-sass-original fs-2'></i>
              <p>Sass</p>
            </div>
            <div>
              <i className='devicon-slack-plain fs-2'></i>
              <p>Slack</p>
            </div>
            <div>
              <i className='devicon-webpack-plain fs-2'></i>
              <p>Webpack</p>
            </div>
            <div>
              <i className='devicon-linux-plain fs-2'></i>
              <p>Linux</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tech