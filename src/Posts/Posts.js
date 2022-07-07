import React from "react";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <>
      {posts?.length != 0 ? (
        posts?.map((post) => {
          return <Post key={post._id} post={post} />;
        })
      ) : (
        <h1>No posts</h1>
      )}
    </>
  );
}

export default Posts;
