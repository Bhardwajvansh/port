import React from "react";
import "./nav.css";
import { BiHome, BiUserPin, BiBook } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
const nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <a className="icon" href="#">
          <BiHome />
        </a>
        <a className="icon" href="#about">
          <BiUserPin />
        </a>
        <a className="icon" href="#experience">
          <BiBook />
        </a>
        <a className="icon" href="#services">
          <MdHomeRepairService />
        </a>
        <a className="icon" href="#contact">
          <SiGooglemessages />
        </a>
      </div>
    </div>
  );
};

export default nav;
