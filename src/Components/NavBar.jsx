import React from 'react';
import './NavBar.css';
import {
  Link
} from 'react-router-dom';



const Navbar = () => {
  return (

    <section id="navbar-section">
      <img src="images/myskinlogo.jpg" alt="myskin logo" width="65" height="65" />

      <ul id="nav-list">
      <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
        <Link to="/routines"> Routines </Link>
        </li>
        <li>Blog</li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Account</li>
      </ul>
    </section>

  );
};

export default Navbar;
