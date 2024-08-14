import React from 'react';
import './navbar.css';
import logo from '../../assets/a.kgreen.png';
import contact from '../../assets/message.png';
import { Link } from 'react-router-dom';
                    



const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className="menu">
        <Link to='/' className="menuListItem">Home</Link>
        <Link to='about' className="menuListItem">About</Link>
        <Link to='portfolio' className="menuListItem">Portfolio</Link>
        <a href='https://docs.google.com/document/d/1XXzxUGkuynZq89Zb-v7_ZMkHPjrAtG9C/edit?usp=sharing&ouid=118009413304435659474&rtpof=true&sd=true' target="_blank" className='menuListItem'>Resume</a>
      </div>  
        <Link to='contact' className='menuBtn'>
        <img src={contact} alt="contact" className="menuBtnImg" />
        Contact Me
      </Link>
    </nav>
  )
}

export default Navbar;