import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./PostDetails.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton, Button, TextField, CircularProgress } from "@mui/material";
import Comments from "../Comments/Comments";
import axios from "../axios/axiosConfig";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { decode } from "../functions";
import moment from "moment";
function PostDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const [commentBody, setCommentBody] = useState("");
  useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/post/getbyid/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [id]);
  const publishComment = async () => {
    if (decode()) {
      setIsLoading(true);
      try {
        const response = await axios.post(`/post/comment`, {
          postId: id,
          content: commentBody,
        });
        let newPost = { ...post };
        newPost.comments.push(response.data);
        setPost(newPost);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    } else {
      alert("You must be logged in to comment");
    }
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="postdetailswindow">
            <div className="postWindow">
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
                <Link to={`/userprofile/${post?.createdBy?._id}`}>
                  <div className="author">
                    Posted by {post?.createdBy?.username}{" "}
                    <span className="time">{moment(post.date).fromNow()}</span>
                  </div>
                </Link>
                <span className="tag">{post.tag}</span>
                <h3 className="heading">{post.heading}</h3>
                <div className="body">{post.body}</div>
                <div className="actions">
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <span className="commentsCount">
                    {post.comments.length} Comments
                  </span>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="writeComments">
              <h3>Write Comments</h3>
              <TextField
                multiline
                value={commentBody}
                name="comment"
                id="comment"
                rows="10"
                onChange={(e) => setCommentBody(e.target.value)}
                style={{
                  width: "100%",
                }}
              ></TextField>
              <Button onClick={publishComment}>Send</Button>
            </div>
          </div>
          <Comments comments={post.comments} />
        </>
      )}
    </>
  );
}

export default PostDetails;
