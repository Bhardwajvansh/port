import React from 'react'
import CV from "../../assets/cv.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn' style={{textDecoration:"none"}} href={CV} download>Download CV</a>
      <a className="btn"style={{textDecoration:"none"}} href="#contact">Let's talk</a>
    </div>
  )
}

export default CTA
