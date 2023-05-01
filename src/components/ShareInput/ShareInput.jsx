import React from 'react'
import { RiLiveFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { GiFlyingFlag } from "react-icons/gi";
import "./shareInput.css"

function ShareInput() {
  return (
    <div className='shareInput'>
      <div className='sh-1'>
        <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfCYAcAzMoWIQLu-qZAfAXXK273yQuNRWwn2dyYVBShB1A&oe=647242E4" alt="" />
        <input type="text" placeholder='   Whats on your mind?' />
      </div>
      <div className='hr'><hr /></div>
      <div className='sb'>
        <div className='sb-1'><RiLiveFill className='ri' />    <span>Live video</span>  </div>
        <div className='sb-2'><IoMdPhotos className='io' />    <span>Photo/video</span>  </div>
        <div className='sb-3'><GiFlyingFlag className='gi' />    <span>Life event</span>  </div>


      </div>
    </div>
  )
}

export default ShareInput