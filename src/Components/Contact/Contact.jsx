import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <h5>Let's connect</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="left">
          <div className="row">
            <h4>EMAIL</h4>
            <p className="detail">vanshayushi@gmail.com</p>
            <p className="send_mail">send a mail</p>
          </div>
          <div className="row">
            <h4>INSTA</h4>
            <p className="detail">one_shh</p>
            <p className="send_mail">send a message</p>
          </div>
          <div className="row">
            <h4>WHATSAPP</h4>
            <p className="detail">8861524553</p>
            <p className="send_mail">send a message</p>
          </div>
        </div>
        <div className="right">
          <form action="submit">
            <input type="text" placeholder="Your Name" name="" id="" />
            <input type="email" placeholder="Your Email" name="" id="" />
            <textarea id="" cols="30" placeholder="Your message" rows="9"></textarea>
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
