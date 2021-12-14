import React,{useEffect} from 'react'
import Navbar from "../Navbar/Navbar"
import Posts from "../Posts/Posts"
import { getMyposts } from '../actions/posts'
import { Avatar } from '@mui/material'
import './UserProfile.css'
import { useDispatch,useSelector } from 'react-redux'
function UserProfile() {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getMyposts())
    }, [])
    const {posts}=useSelector((state)=>state.posts)
    return (
        <>
            <Navbar/>
            <div className="home">
                <Posts posts={posts}/>
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
