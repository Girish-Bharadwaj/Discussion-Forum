import React from "react";
import "./Comments.css";
function Comments({ comments }) {
  return (
    <div className="comments">
      {comments?.map((comment) => (
        <div className="comment">
          <div className="authorComment">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png"
              alt=""
              srcset=""
            />
            <div className="postedName">
              <p>{comment.user.username}</p>
              <div className="divider"></div>
              <p>{comment.date}</p>
            </div>
          </div>
          <div className="body">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
