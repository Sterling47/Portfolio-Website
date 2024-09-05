import React from 'react';
import './navbar.css';
import logo from '../../assets/a.kgreen.png';
import contact from '../../assets/message.png';
import { Link } from 'react-router-dom';
                    



const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'><img src={logo} alt="logo" className='logo'/></Link>
      <div className="menu">
        <Link to='/' className="menuListItem">Home</Link>
        <Link to='about' className="menuListItem">About</Link>
        <Link to='portfolio' className="menuListItem">Portfolio</Link>
        <Link to='resume' className='menuListItem'> Resume </ Link>
      </div>  
        <Link to='contact' className='menuBtn'>
        <img src={contact} alt="contact" className="menuBtnImg" />
        Contact Me
      </Link>
    </nav>
  )
}

export default Navbar;