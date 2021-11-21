import React from 'react'
import Navbar from "../Navbar/Navbar"
import Posts from "../Posts/Posts"
import { Avatar } from '@mui/material'
import './UserProfile.css'
function UserProfile() {
    return (
        <>
            <Navbar/>
            <div className="home">
                <Posts/>
            </div>
            <div className="profileDetails">
                <Avatar sx={{width:"54px",height:"54px"}} />
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
            </div>
        </>
    )
}

export default UserProfile
