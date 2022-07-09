import moment from "moment";
import React from "react";
import "./Comments.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar } from "@mui/material";

function Comments({ comments }) {
  return (
    <div className="comments">
      {comments?.map((comment) => (
        <div className="comment">
          <div className="authorComment">
            <Avatar
              style={{
                marginRight: "10px",
              }}
            />
            <div className="postedName">
              <p>{comment.user.username}</p>
              <div className="divider"></div>
              <p>{moment(comment.date).fromNow()}</p>
            </div>
          </div>
          <ReactMarkdown
            children={comment.content}
            className="body"
            remarkPlugins={[remarkGfm]}
          />
        </div>
      ))}
    </div>
  );
}

export default Comments;
