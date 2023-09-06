import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id="navbar-section">
      <img src="images/myskinlogo.jpg" alt="myskin logo" width="65" height="65" />

      <ul id="nav-list">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/routines" activeClassName="active">
            Routines
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="active">
            Account
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
