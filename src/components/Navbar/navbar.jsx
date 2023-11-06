import React from 'react';
import './navbar.css';
import logo from '../../assets/a.kgreen.png';
import contact from '../../assets/message.png';
import { Link } from 'react-scroll';
 



const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className="menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} className="menuListItem">About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} className="menuListItem">Portfolio</Link>
      </div>  
        <Link activeClass='active' to='contactForm' spy={true} smooth={true} offset={-100} className='menuBtn'>
        <img src={contact} alt="contact" className="menuBtnImg" />
        Contact Me
      </Link>
    </nav>
  )
}

export default Navbar;