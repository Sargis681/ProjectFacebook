import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import "./post.css"
import { RiShareForwardLine } from "react-icons/ri";







function Post() {
    return (
        <div className='post'>
            <div className="pos">
                <div className='pos-1'>

                    <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfBWwDB5j3FTVXIaNh-hudMmQ3P3MP_zjea9tKwXgI3Wdw&oe=6472EBA4" alt="" />
                    <div className="post-1">
                        <div className='post-1-1'>
                            <span className='sa'>Sargis Manukyan</span>
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
                <div className='post-2-2'><img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/120530158_1679435518901169_1349167255766488268_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfCI3bK-IvR6lIn718ACqGWC7hzyic9_lspRZC1Cu9cXYw&oe=64730654" alt="" /></div>
            </div>
            <hr />
            <span className='bi'><BiLike className='bil' /> Gev Shahbazyan,M-yan, and 16 others</span>
            <hr className='hr-s' />
            <div className='li-co'>
                <div><BiLike className='bbr' /> <span>Like</span> </div>
                <div><BiComment className='bbr' />  <span>Comment</span> </div>
                <div><RiShareForwardLine className='bbr' /> <span>Share</span> </div>
            </div>
            <hr className='hr-s' />
            <div className='input-div'>
                <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-1/120530158_1679435518901169_1349167255766488268_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=eRXA2A85VK4AX_142VQ&_nc_ht=scontent.fevn7-1.fna&oh=00_AfDKWk-r-4yEe6luRIukB6hfNlKU-c7cv1MovIyCCtGE7w&oe=647323E4" alt="" />
                <input type="text" placeholder='  Write a comment ...' />

            </div>

        </div>
    )
}

export default Post