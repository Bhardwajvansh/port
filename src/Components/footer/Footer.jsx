import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div id="footer">
      <h2>VANSH BHARDWAJ</h2>
      <div className="container footer_container">
        <div className="footer_nav">
          <a className="ic" href="#">
            Home
          </a>
          <a className="ic" href="#about">
            About
          </a>
          <a className="ic" href="#experience">
            Experience
          </a>
          <a className="ic" href="#services">
            Services
          </a>
          <a className="ic" href="#contact">
            Contact Me
          </a>
          <a className="ic" href="#testi">
            Testimonial
          </a>
        </div>
        <div className="social">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillTwitterSquare />
        </div>
        <p>Made with 💙 by VANSH BHARDWAJ</p>
      </div>
    </div>
  );
};

export default Footer;
