import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { FaRegCaretSquareRight } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { CiGrid42 } from 'react-icons/ci';
import "./navbar.css"


import { CgMenuGridO } from 'react-icons/cg';
import { BsMessenger } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
function Navbar() {
  return (
    <div className='navbar'>
      {/* <div className="container"> */}
      <div className='fa-input'>
        <BsFacebook className='fa-Facebook' />
        <input type='search' placeholder='Search Facebook...' />
      </div>

      <div className='fa-center'>
        <span> <AiOutlineHome className='aiOutline-home' /> </span>
        <span> <AiOutlineVideoCamera className='aiOutline-video-camera' /> </span>
        <span> <FaRegCaretSquareRight className='fa-reg-caret-square-right' /> </span>
        <span> <SiYoutubegaming className='si-youtube-gaming' /> </span>
        <span> <CiGrid42 className='fc-cus-tome-support' /> </span>

      </div>
      <div className='fa-left'>
        <span><CgMenuGridO className='menu-grid' /></span>
        <span><BsMessenger className='messenger' /></span>
        <span><IoIosNotifications className='notifications' /></span>

      </div>

      {/* </div> */}

    </div>
  )
}

export default Navbar