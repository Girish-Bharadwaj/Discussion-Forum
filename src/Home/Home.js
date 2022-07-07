import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../axios/axiosConfig";
import { Box, Button, Fab, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};
function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("Best");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    heading: "",
    body: "",
    tag: "",
  });
  useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/post/get`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  const createPost = async () => {
    handleClose();
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/post/create`, {
        heading: newPost.heading,
        body: newPost.body,
        tag: newPost.tag,
      });
      setPosts([...posts, response.data]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <Navbar />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="home">
          <div style={{ width: "100%" }}>
            <div className="topics">
              <Link className="link" to="/">
                <span
                  className={classNames({
                    topicsclicked: topic === "Best",
                    topicsNotclickced: topic === "Top",
                  })}
                  onClick={() => {
                    setTopic("Best");
                  }}
                >
                  Best
                </span>
              </Link>
              <Link className="link" to="/">
                <span
                  className={classNames({
                    topicsclicked: topic === "Top",
                    topicsNotclickced: topic === "Best",
                  })}
                  onClick={() => {
                    setTopic("Top");
                  }}
                >
                  Top
                </span>
              </Link>
            </div>

            <Posts posts={posts} />
          </div>
          {/* <div className="topGroups">hello android</div> */}
          <div className="fab">
            <Fab onClick={handleOpen} color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </div>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              marginBottom: "10px",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create Post
          </Typography>
          <TextField
            style={{ width: "100%" }}
            label="Title"
            variant="outlined"
            value={newPost.heading}
            onChange={(e) => {
              setNewPost({ ...newPost, heading: e.target.value });
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            label="Body"
            multiline
            rows={5}
            variant="outlined"
            value={newPost.body}
            onChange={(e) => {
              setNewPost({ ...newPost, body: e.target.value });
            }}
          />
          <TextField
            style={{ width: "100%", marginBottom: "10px" }}
            label="Tag"
            variant="outlined"
            value={newPost.tag}
            onChange={(e) => {
              setNewPost({ ...newPost, tag: e.target.value });
            }}
          />
          <Button variant="contained" onClick={createPost}>
            Create Post
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
