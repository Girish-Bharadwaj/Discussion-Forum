import React, { useState } from 'react'
import './Login.css'
import {TextField,Button} from '@mui/material'
function Login() {
    const [state, setState] = useState("login");
    return (
        <div className="loginwindow">
            {(state==="login")?
            <div className="login">
            <h2 className="heading">Login</h2>
            <TextField style={{margin:"10px",marginTop:"15px"}} id="outlined-basic" label="Email" variant="outlined" type="email"/>
            <TextField style={{margin:"10px"}} id="outlined-basic" label="Password" variant="outlined" type="password"/>
            <Button style={{margin:"10px"}} variant="contained">Login</Button>
            <h3 onClick={()=>{setState("Register")}}>Don't have account? Register</h3>
            </div>:
            <div className="login">
            <h2 className="heading">Register</h2>
            <TextField style={{margin:"10px",marginTop:"15px"}} id="outlined-basic" label="Name" variant="outlined" type="text"/>
            <TextField style={{margin:"10px",marginTop:"15px"}} id="outlined-basic" label="Email" variant="outlined" type="email"/>
            <TextField style={{margin:"10px"}} id="outlined-basic" label="Password" variant="outlined" type="password"/>
            <Button style={{margin:"10px"}} variant="contained">Register</Button>
            <h3 onClick={()=>{setState("login")}}>Login</h3>
            </div>
        }
        </div>
    )
}

export default Login
