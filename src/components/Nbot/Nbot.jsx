import React from 'react'
import { MdPhotoCamera } from 'react-icons/md';
import { ImSmile2 } from 'react-icons/im';
import "./nbot.css"

function Nbot() {
  return (
    <div className='n-bot'>
      <div className="container">
        <div className='n'>
          <div className='n-create'> <MdPhotoCamera className='photo-camera' />  <span>create with avatar</span> </div>
          <div className='n-add'> <ImSmile2 className='smile' />  <span>add cover photo</span> </div>
        </div>
      </div>
    </div>
  )
}

export default Nbot