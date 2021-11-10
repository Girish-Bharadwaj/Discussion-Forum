import React from 'react'
import './Post.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
function Post() {
    return (
        <div className="window">
            <div className="left">
                <IconButton><ArrowUpwardIcon/></IconButton>
                <span className="upvotes">9</span>
                <IconButton><ArrowDownwardIcon/></IconButton>
            </div>
            <div className="right">
                <div className="author">Posted by Andrew <span className="time">11 hours ago</span></div>
                <span className="tag">Question</span>
            <Link to="/postDetails">
                <h3 className="heading">UFC posted website time of event</h3>
                <div className="body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, earum? Repellendus, temporibus inventore rerum atque eos ipsa maiores eveniet deserunt pariatur minima vitae soluta voluptas quos repellat sed, quisquam architecto ipsam animi omnis amet facere eligendi!
                </div>
                 </Link>
                <div className="actions">
                    <IconButton><ChatBubbleOutlineIcon/></IconButton>
                    <span className="commentsCount">4 Comments</span>
                    <IconButton><ShareIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Post
