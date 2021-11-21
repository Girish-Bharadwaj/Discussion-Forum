import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Posts from '../Posts/Posts'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../actions/posts'
function Home() {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getPosts)
    }, [])
    const posts=useSelector(state=>state.posts)
    console.log("home",posts)
    const [topic, setTopic] = useState('Best');
    return (
        <>
          <Navbar/>
            <div className="home">
                <div>
                    <div className="topics">
                        <Link className="link" to="/home"><span  className={classNames({ 'topicsclicked': (topic==='Best'), 'topicsNotclickced': (topic==='Top') })} onClick={()=>{setTopic('Best')}}>Best</span></Link>
                        <Link className="link" to="/home"><span className={classNames({ 'topicsclicked': (topic==='Top'), 'topicsNotclickced': (topic==='Best') })} onClick={()=>{setTopic('Top')}}>Top</span></Link>
                    </div>
                    <Posts/>
                </div>
                <div className="topGroups">
                    hello android
                </div>
            </div>  
        </>
    )
}

export default Home
