import React, { useEffect, useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";
import axios from "../axios/axiosConfig";
import jwt from "jwt-simple";
import { useNavigate } from "react-router-dom";
import { decode } from "../functions";

function Login() {
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const decoded = decode();
    if (decoded) {
      navigate("/home");
    }
  }, []);
  const login = async () => {
    try {
      const response = await axios.post("/login", {
        emailId: email,
        password: password,
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      alert("Invalid email or password");
    }
  };
  const signup = async () => {
    try {
      const response = await axios.post("/signup", {
        emailId: email,
        password: password,
        username: name,
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="loginwindow">
      {state === "login" ? (
        <div className="login">
          <h2 className="heading">Login</h2>
          <TextField
            style={{ margin: "10px", marginTop: "15px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ margin: "10px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={login}
            style={{ margin: "10px" }}
            variant="contained"
          >
            Login
          </Button>
          <h3
            onClick={() => {
              setState("Register");
            }}
          >
            Don't have account? Register
          </h3>
        </div>
      ) : (
        <div className="login">
          <h2 className="heading">Register</h2>
          <TextField
            style={{ margin: "10px", marginTop: "15px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ margin: "10px", marginTop: "15px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ margin: "10px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={signup}
            style={{ margin: "10px" }}
            variant="contained"
          >
            Register
          </Button>
          <h3
            onClick={() => {
              setState("login");
            }}
          >
            Login
          </h3>
        </div>
      )}
    </div>
  );
}

export default Login;
