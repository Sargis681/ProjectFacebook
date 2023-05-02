import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import "./post.css";
import { useDispatch, useSelector } from 'react-redux';
import { addComment, addLike, redTru, selectPost } from '../../store/postSlices/postSlices';

function Post(props) {
  const post = useSelector(selectPost)
  const dispatch=useDispatch()
  const ref=useRef()
  // console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref.current[0].value);
    dispatch(addComment({
      id: props.el.id,
      txt:ref.current[0].value,
      key:new Date().getTime().toString()
    }))
    ref.current[0].value=""
    console.log(post);

  
  };
  const  handleClick = () => {
    dispatch(addLike(props.el.id));
    dispatch(redTru(props.el.id))
    // console.log("11");
  };

  // console.log(post);

 

  return (
    <>
        <div key={props.el.id} className='post'>
          <div className="pos">
            <div className='pos-1'>
              <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4" alt="" />
              <div className="post-1">
                <div className='post-1-1'>
                  <span className='sa'>{props.el.name}</span>
                  <span>September 30, 2020</span>
                </div>
                <div className='post-1-2'>
                  <span>updated his profile picture.</span>
                  <span><AiFillCaretDown /></span>
                </div>
              </div>
            </div>
            <BiDotsHorizontalRounded />
          </div>
          <div className="post-2">
            <div className='post-2-2'><img src={props.el.img} alt="" /></div>
          </div>
          <hr />
          <span className='bi'><BiLike className='bil' /> Gev Shahbazyan, M-yan, and 16 others</span>
          <hr className='hr-s' />
          <div className='li-co'>
            <div onClick={handleClick}><BiLike style={ props.el.red?{fill:"red"}:{fill:"wheat"}} className='bbr' /> <span >Like {props.el.like}</span> </div>
            <div><BiComment className='bbr' />  <span>Comment</span> </div>
            <div><RiShareForwardLine className='bbr' /> <span>Share</span> </div>
          </div>
          <hr className='hr-s' />

          {
            props.el.comment.map(el=>(
              <div className='comment'>
                <div>
                  <img style={{width:"30px",height:"30px",borderRadius:"50%"}} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                  <span>Sargis</span>
                  </div>
              <p>{el}</p>
              </div>
            ))
          }

          <div className='input-div'>
            <form  ref={ref} onSubmit={handleSubmit} >
              <input type="text" placeholder='Write a comment ...'   name='comments'/>
              <button className='sub'>Submit</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Post;
