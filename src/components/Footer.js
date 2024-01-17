import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src="./images/logo.svg" className="logo" fill="#fff" color="#fff" /> */}
      <span className="footer-logo">Shortly</span>
      <div className="footer-subhead">
        <h3>Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div className="footer-subhead">
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div className="footer-subhead">
        <h3>Company</h3>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contacts</p>
      </div>
      <div className="icon-box">
        <img src="./images/icon-facebook.svg" />
        <img src="./images/icon-twitter.svg" />
        <img src="./images/icon-pinterest.svg" />
        <img src="./images/icon-instagram.svg" />
      </div>
    </div>
  );
};

export default Footer;
