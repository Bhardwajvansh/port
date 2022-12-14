import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <div id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vitae voluptatum voluptatibus maxime, nam labore, amet
            illo facilis atque recusandae architecto reiciendis iure odit
            eveniet suscipit doloremque. Corrupti culpa explicabo inventore
            accusamus,
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
