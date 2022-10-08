import React from "react";
import "./testi.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
const testi = () => {
  return (
    <div id="testi">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testi_container">
        <div className="testi">
          <img src={AVTR1} alt="" />
          <h5>Ernest Achiever</h5>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            ipsam cupiditate, quos cum necessitatibus explicabo. Deleniti
            dignissimos esse nostrum quidem, ea voluptatem tenetur temporibus
            nesciunt suscipit dolorem error magnam.
          </small>
        </div>
      </div>
      <div className="container testi_container">
        <div className="testi">
          <img src={AVTR2} alt="" />
          <h5>Ernest Achiever</h5>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            ipsam cupiditate, quos cum necessitatibus explicabo. Deleniti
            dignissimos esse nostrum quidem, ea voluptatem tenetur temporibus
            nesciunt suscipit dolorem error magnam.
          </small>
        </div>
      </div>
      <div className="container testi_container">
        <div className="testi">
          <img src={AVTR3} alt="" />
          <h5>Ernest Achiever</h5>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            ipsam cupiditate, quos cum necessitatibus explicabo. Deleniti
            dignissimos esse nostrum quidem, ea voluptatem tenetur temporibus
            nesciunt suscipit dolorem error magnam.
          </small>
        </div>
      </div>
      <div className="container testi_container">
        <div className="testi">
          <img src={AVTR4} alt="" />
          <h5>Ernest Achiever</h5>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
            ipsam cupiditate, quos cum necessitatibus explicabo. Deleniti
            dignissimos esse nostrum quidem, ea voluptatem tenetur temporibus
            nesciunt suscipit dolorem error magnam.
          </small>
        </div>
      </div>
    </div>
  );
};

export default testi;
