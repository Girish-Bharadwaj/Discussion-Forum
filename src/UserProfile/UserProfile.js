import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import "./UserProfile.css";
import { Edit } from "@mui/icons-material";
import axios from "../axios/axiosConfig";
import TagsInput from "../TagsInput/TagsInput";
import { useParams, useNavigate } from "react-router-dom";
import { decode, logout } from "../functions";

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
  const { id } = useParams();
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
      const response = await axios.get(`userbyid/${id}`);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [id]);
  const updateProfile = async () => {
    handleClose();
    setIsLoading(true);
    try {
      await axios.put(`profile`, {
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
  const decoded = decode();
  const navigate = useNavigate();
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
            {decoded?._id === id ? (
              <>
                <IconButton onClick={handleOpen}>
                  <Edit />
                </IconButton>
                <Button
                  variant="contained"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="home" style={{ flexDirection: "column" }}>
            <Posts posts={profile.postsCreated} />
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
                style={{
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
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
      )}
    </>
  );
}

export default UserProfile;
