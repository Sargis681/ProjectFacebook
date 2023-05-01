import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import "./navbarTwo.css"

function NavbarTwo() {
  return (
    <div className='NavbarTwo'>
      <div className="container">
        <div className='two-left'>
          <span>Posts</span>
          <span>About</span>
          <span>Friends</span>
          <span>Photos</span>
          <span>Videos</span>
          <span>Check </span>
          <span>More</span>
        </div>
        <div className='two-right'>
          <BiDotsHorizontalRounded className='bi-dot' />
        </div>
      </div>


    </div>
  )
}

export default NavbarTwo