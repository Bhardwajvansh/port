import React from "react";
import "./Experience.css";
import { BsCheckCircle } from "react-icons/bs";
const Experience = () => {
  return (
    <div id="experience">
      <h5>What Skills I Have</h5>
      <h2 style={{ color: "white" }}>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h4>Frontend Development</h4>
          <div className="experience_content">
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>HTML</h5>
                  Experienced
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>CSS</h5>
                  Intermediate
                </div>
              </div>
            </div>
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Bootstrap</h5>
                  Experienced
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Java Script</h5>
                  Experienced
                </div>
              </div>
            </div>
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>React</h5>
                  Experienced
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Tailwind</h5>
                  Experienced
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience_frontend">
          <h4>Backend Development</h4>
          <div className="experience_content">
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Node Js</h5>
                  Experienced
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>PHP</h5>
                  Basic
                </div>
              </div>
            </div>
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>MongoDB</h5>
                  Intermediate
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>MySQL</h5>
                  Intermediate
                </div>
              </div>
            </div>
            <div className="rowww">
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Python</h5>
                  Intermediate
                </div>
              </div>
              <div className="experience_details">
                <BsCheckCircle />
                <div className="details">
                  <h5 style={{ color: "white" }}>Express Js</h5>
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
