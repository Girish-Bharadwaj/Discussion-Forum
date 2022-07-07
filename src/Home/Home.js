import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";
import EditIcon from "@mui/icons-material/Edit";

import { Box, Button, Fab, Modal, TextField, Typography } from "@mui/material";
const posts = [
  {
    id: 1,
    title: "Hello World",
    body: "Wikipedia began with its first edit on 15 January 2001, two days after the domain was registered[2] by Jimmy Wales and Larry Sanger. Its technological and conceptual underpinnings predate this; the earliest known proposal for an online encyclopedia was made by Rick Gates in 1993,[3] and the concept of a free-as-in-freedom online encyclopedia (as distinct from mere open source)[4] was proposed by Richard Stallman in 1998.[5] Crucially, Stallman's concept specifically included the idea that no central organization should control editing. This characteristic greatly contrasted with contemporary digital encyclopedias such as Microsoft Encarta, Encyclopædia Britannica, and even Bomis's Nupedia, which was Wikipedia's direct predecessor. In 2001, the license for Nupedia was changed to GFDL, and Wales and Sanger launched Wikipedia using the concept and technology of a wiki pioneered in 1995 by Ward Cunningham.[6] Initially, Wikipedia was intended to complement Nupedia, an online encyclopedia project edited solely by experts, by providing additional draft articles and ideas for it. In practice, Wikipedia quickly overtook Nupedia, becoming a global project in multiple languages and inspiring a wide range of other online reference projects.",
    votesCount: 10,
    userID: "Girish",
    date: "2020-01-01",
    comments: [],
  },
];
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
const isLoading = false;
function Home() {
  const [topic, setTopic] = useState("Best");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="home">
          <div style={{ width: "100%" }}>
            <div className="topics">
              <Link className="link" to="/home">
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
              <Link className="link" to="/home">
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
          />
          <TextField
            style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            label="Body"
            multiline
            rows={5}
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: "10px" }}
            label="Tag"
            variant="outlined"
          />
          <Button variant="contained">Create Post</Button>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
