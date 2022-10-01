import React, { useState, useEffect } from 'react'
import '../../styles/intro.css';

const Intro = ({ text }) => {
  const [fade, setFade] = useState(
    {
      fade: 'fade-in'
    }
  );

/*   useEffect(() => {
    const timeout = setInterval(() => {
      if (fade.fade === 'fade-in') {
         setFade({
              fade: 'fade-out'
         })
      } else {
           setFade({
              fade: 'fade-in'
           })
      }
   }, 2000);

return () => clearInterval(timeout)
}, []); */

  return (
    <div className='visually-hidden'>
      <h1 className={fade.fade}>{text}</h1>
    </div>
  )
}

export default Intro