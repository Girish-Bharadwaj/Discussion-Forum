import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import "./UserProfile.css";
import { Edit } from "@mui/icons-material";
import TagsInput from "../TagsInput/TagsInput";

function UserProfile() {
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
  const posts = [
    {
      id: 1,
      title: "Hello World",
      body: "This is a post",
      votesCount: 10,
      userID: "Girish",
      date: "2020-01-01",
      comments: [],
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [interestedTags, setInterestedTags] = useState([]);
  return (
    <>
      <Navbar />
      <div className="home">
        {" "}
        <Posts posts={posts} />{" "}
      </div>
      <div className="profileDetails">
        <Avatar sx={{ width: "54px", height: "54px" }} />
        <div className="name">Girish Bharadwaj</div>
        <div className="bio">Go write yours</div>
        <div className="headingI">Interested in:</div>
        <div className="interests">
          <span className="topics">Android</span>
          <span className="topics">React</span>
          <span className="topics">Android</span>
          <span className="topics">React</span>
          <span className="topics">Android</span>
          <span className="topics">React</span>
          <span className="topics">Android</span>
          <span className="topics">React</span>
        </div>
        <IconButton onClick={handleOpen}>
          <Edit />
        </IconButton>
      </div>
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
            Edit profile details
          </Typography>
          <TextField
            style={{ width: "100%" }}
            label="Name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginTop: "10px", marginBottom: "15px" }}
            label="Bio"
            variant="outlined"
          />
          <TagsInput
            selectedTags={(items) => {
              setInterestedTags(items);
            }}
            fullWidth
            variant="outlined"
            id="tags"
            name="Interested Topics"
            placeholder="Add Topics"
            label="Interested topics"
          />
          <Button style={{ marginTop: "10px" }} variant="contained">
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default UserProfile;
