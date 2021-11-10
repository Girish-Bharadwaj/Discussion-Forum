import React from 'react'
import Navbar from '../Navbar/Navbar'
import './PostDetails.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton,Button } from '@mui/material';
import Comments from '../Comments/Comments';
function PostDetails() {
    return (
        <>
            <Navbar/>
            <div className="postdetailswindow">
            <div className="postWindow">
                <div className="left">
                    <IconButton><ArrowUpwardIcon/></IconButton>
                    <span className="upvotes">9</span>
                    <IconButton><ArrowDownwardIcon/></IconButton>
                </div>
                <div className="right">
                    <div className="author">Posted by Andrew <span className="time">11 hours ago</span></div>
                    <span className="tag">Question</span>
                    <h3 className="heading">UFC posted website time of event</h3>
                    <div className="body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi sapiente dolorem consequatur corporis minus earum error quibusdam, eius sint qui facere. Asperiores debitis veniam, repellat facere quisquam laudantium consequatur dolore reprehenderit recusandae, aliquid architecto dolores reiciendis voluptatum deserunt optio. Blanditiis quidem eos voluptas ex delectus. Dolores, sequi magnam possimus voluptatum fuga quisquam quae non rem alias, quibusdam repellendus recusandae inventore magni iste fugit nam odio nihil, placeat quod. Sit ad necessitatibus placeat veniam atque nemo possimus libero aspernatur maiores, adipisci dolor officia, eos earum porro temporibus rerum beatae obcaecati, veritatis magni vero nam dolore inventore error? Sequi, maiores unde!
                    </div>
                    <div className="actions">
                        <IconButton><ChatBubbleOutlineIcon/></IconButton>
                        <span className="commentsCount">4 Comments</span>
                        <IconButton><ShareIcon/></IconButton>
                    </div>
                </div>
            </div>
            <div className="writeComments">
                <h3>Write Comments (Markdown Supported)</h3>
                <textarea name="comment" id="comment" cols="90" rows="10"></textarea>
                <Button >Send</Button>
            </div>
            </div>
            <Comments/>
        </>
    )
}

export default PostDetails
