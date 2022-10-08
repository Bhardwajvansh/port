import React from "react";
import './port.css'
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const port = () => {
  return (
    <div id="portfolio">
      <h5>My Rescent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG1} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn" target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG2} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn" target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG3} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn"  target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG4} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn" target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG5} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn" target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
        <div className="portfolio_item">
          <div className="port_image">
            <img src={IMG6} alt="" />
          </div>
          <h4>Title</h4>
          <a href="https://github.com" className="btn" target="blank">
            Github
          </a>
          <a href="https://github.com" className="btn">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default port;
