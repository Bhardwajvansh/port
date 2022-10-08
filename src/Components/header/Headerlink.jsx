import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
const Headerlink = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default Headerlink
