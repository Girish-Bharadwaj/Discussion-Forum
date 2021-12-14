import React from 'react'
import './Post.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
function Post({post}) {
    return (
        <div className="window">
            <div className="left">
                <IconButton><ArrowUpwardIcon/></IconButton>
                <span className="upvotes">{post.votesCount}</span>
                <IconButton><ArrowDownwardIcon/></IconButton>
            </div>
            <div className="right">
                <div className="author">{post.userID} <span className="time">{post.date}</span></div>
                <span className="tag">Question</span>
            <Link to="/postDetails">
                <h3 className="heading">{post.heading}</h3>
                <div className="body">
                    {post.body.substr(0,360)+"..."}
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
