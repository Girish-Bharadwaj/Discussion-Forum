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
import axios from "../axios/axiosConfig";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [interestedTags, setInterestedTags] = useState([]);
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: "",
    bio: "",
  });
  console.log(interestedTags);
  useEffect(() => {
    setEditProfile({
      name: profile.username,
      bio: profile.bio,
    });
    setInterestedTags(profile.tags);
  }, [profile]);
  useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/userbyid/62c71681966776f57c3ed9f0`
      );
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);
  const updateProfile = async () => {
    handleClose();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:5000/profile`, {
        username: editProfile.name,
        bio: editProfile.bio,
        tags: interestedTags,
      });
      setProfile({ ...profile, ...editProfile, tags: interestedTags });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Navbar />
      <div className="home">
        <Posts posts={profile.postsCreated} />
      </div>
      <div className="profileDetails">
        <Avatar sx={{ width: "54px", height: "54px" }} />
        <div className="name">{profile.username}</div>
        <div className="bio">{profile.bio}</div>
        <div className="headingI">Interested in:</div>
        <div className="interests">
          {profile?.tags?.map((tag) => (
            <span className="topics">{tag}</span>
          ))}
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
            value={editProfile.name}
            onChange={(e) =>
              setEditProfile({ ...editProfile, name: e.target.value })
            }
          />
          <TextField
            style={{ width: "100%", marginTop: "10px", marginBottom: "15px" }}
            label="Bio"
            variant="outlined"
            value={editProfile.bio}
            onChange={(e) =>
              setEditProfile({ ...editProfile, bio: e.target.value })
            }
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
          <Button
            onClick={updateProfile}
            style={{ marginTop: "10px" }}
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default UserProfile;
