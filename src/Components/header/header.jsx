import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me.png"
import Headersocial from "./Headerlink"
import "./header.css"
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>hello i am</h5>
        <h1>Vansh Bhardwaj</h1>
        <h5 className="text-light">FRONTEND DEVELOPER</h5>
        <CTA className="cta" />
        <Headersocial/>
        <div className='me'>
          <img src={ME } alt="" />
        </div>
        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
