import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='header'>
      
      <div className='menu'>
            <span className='home'>Home</span>
            <span>About</span>
            <span>FemAcademy</span>
            <span>FemReach</span>
            <span>Contact</span>

        </div>
        <button className='headerButton'>
            <span>Enroll Now</span>

        </button>      
    </div>
  )
}

export default Header
