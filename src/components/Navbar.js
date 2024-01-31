import React from 'react'
import Logo from '../assets/pizzaLogo.png';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        {/* for the logo */}
        <img src={Logo}  />
        </div>
    
      <div className='rightSide'></div> {/* for the nav elements */}
    </div>
  )
}

export default Navbar
