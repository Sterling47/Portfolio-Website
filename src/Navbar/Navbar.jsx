import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/a.kgreen.png';
import contact from '../assets/message.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="menuToggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
      </button>

      {/* Menu Items */}
      <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <Link
          to="/"
          className="menuListItem"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          className="menuListItem"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="portfolio"
          className="menuListItem"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="resume"
          className="menuListItem"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </Link>
      </div>

      {/* Contact Button */}
      <Link to="contact" className="menuBtn">
        <img src={contact} alt="contact" className="menuBtnImg" />
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
