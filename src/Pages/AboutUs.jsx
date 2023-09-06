import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="AUcontainer">
      <div className="green-box">
        <h2>About Us</h2>
        <p>
          Welcome to MySkin! MySkin is an easy-to-use skincare routine tracker.
          Easily build your own routines and track the products you use. It has
          never been easier to build a custom skincare routine that makes you
          feel in control.
        </p>
      </div>
      <div className="green-box">
        <h2>How to use MySkin</h2>
        <p>
          My Skin is a user-friendly tool that helps you build, track, and manage
          your skincare routines. Simply start by inputting your current skincare
          routine with the brand name, product type, and when you purchased it.
          As you use products, you can track when they empty so you can better
          predict when to refill on your favorite products.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
