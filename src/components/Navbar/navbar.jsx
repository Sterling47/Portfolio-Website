import React from 'react';
import './navbar.css';
import logo from '../../assets/a.k.png';
import hoverLogo from '../../assets/hoverLogo.png'
import contact from '../../assets/message.png';
import { Link } from 'react-scroll';
 
const icon = <a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Smashicons - Flaticon</a>


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className="menu">
        <Link className="menuListItem">Home</Link>
        <Link className="menuListItem">About</Link>
        <Link className="menuListItem">Portfolio</Link>
        <Link className="menuListItem">Clients</Link>
      </div>  
      <button className='menuBtn'>
        <img src={contact} alt="contact" className="menuBtnImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar;