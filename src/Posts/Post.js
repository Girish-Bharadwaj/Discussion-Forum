import React from "react";
import "./Post.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Post({ post }) {
  return (
    <div className="window">
      <div className="left">
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
        <span className="upvotes">{post.votesCount}</span>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <div className="right">
        <Link to={`/userprofile/${post.createdBy._id}`}>
          <div className="author">
            Posted by {post.createdBy.username}{" "}
            <span className="time">{moment(post.date).fromNow()}</span>
          </div>
        </Link>
        <span className="tag">{post.tag}</span>
        <Link to={`/postDetails/${post._id}`}>
          <h3 className="heading">{post.heading}</h3>
          {/* <div className="body">{post.body.substr(0, 360) + "..."}</div> */}
          <ReactMarkdown
            children={post.body.substr(0, 360) + "..."}
            remarkPlugins={[remarkGfm]}
          />
        </Link>
        <div className="actions">
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <span className="commentsCount">{post.comments.length}</span>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
