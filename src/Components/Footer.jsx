import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer-section">
      <img id="logo" src="images/myskinlogo.jpg" alt="myskin logo" width="65" height="65" />

      <ul id="footer-list">
        <li>Search</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>

      <img id="ig-logo" src="images/instagram logo.png" alt="ig logo" width="35" height="35" />
    </section>
  );
};

export default Footer;