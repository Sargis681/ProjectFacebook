import React from 'react'
// import "../Style/style.css"
import "../Content/content.css"
import Intro from '../Intro/Intro'
import ContentFriends from '../ContentFriends/ContentFriends'
import ShareInput from '../ShareInput/ShareInput'
import ListGrid from '../ListGrig/ListGrid'
import Post from '../Post/Post'

function Content() {
  return (
    <div className='content'>
      <div className="container">
        <div className="cont-left">
          <Intro />
          <div className='left-2'>
            <h4 className='h-1'>Photos</h4>
            <h4 className='h-2'>See all photos</h4>
          </div>
          <ContentFriends />
        </div>
        <div className="cont-right">
          <ShareInput />
          <ListGrid />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

        </div>
      </div>
    </div>
  )
}

export default Content