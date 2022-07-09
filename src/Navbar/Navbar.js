import React, { useEffect } from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { decode } from "../functions";
import { Avatar } from "@mui/material";

let decoded;
function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    decoded = decode();
  }, []);
  return (
    <div className="navbar">
      <Link to="/">
        <h2 style={{ color: "black" }}>Discussion Forum</h2>
      </Link>
      {decoded?.username ? (
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link style={{ height: "80%" }} to={`/userprofile/${decoded._id}`}>
            <Button variant="outlined" className="profileButton">
              <div className="profile">
                <Avatar style={{ margin: "10px" }} />
                <h3 className="name">{decoded.username}</h3>
              </div>
            </Button>
          </Link>
          <div className="logout-div">
            <Button
              style={{ height: "100%", marginLeft: "10px" }}
              variant="outlined"
              onClick={logout}
            >
              <div className="profile">
                <h3 className="name">Logout</h3>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Link to={`/`}>
            <Button variant="outlined">
              <div className="profile">
                <h3 className="name">Login</h3>
              </div>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
