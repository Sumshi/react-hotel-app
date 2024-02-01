// This page will contain the logo and nav elements and maybe the footer

import React from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        {/* for the logo */}
        <img src={Logo} alt="" />
        <div className='hiddenLinks'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    
      <div className='rightSide'>
        {/* for the nav elements */}
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;
