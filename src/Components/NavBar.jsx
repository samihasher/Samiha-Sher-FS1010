import React from 'react';
import './NavBar.css';


const Navbar = () => {
  return (
    <section id="navbar-section">
      <img src="images/myskinlogo.jpg" alt="myskin logo" width="65" height="65" />

      <ul id="nav-list">
        <li>Routines</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Account</li>
      </ul>
    </section>
  );
};

export default Navbar;
