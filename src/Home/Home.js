import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Posts from '../Posts/Posts'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../actions/posts'
function Home() {
    const [topic, setTopic] = useState('Best');
    const dispatch=useDispatch();
    useEffect(() => {
        console.log(getPosts())
        dispatch(getPosts())
    }, [])
    const {posts,isLoading}=useSelector(state=>state.posts)
    return (
        <>
          <Navbar/>
            {isLoading?<h1>Loading</h1>:
                <div className="home">
                <div>
                    <div className="topics">
                        <Link className="link" to="/home"><span  className={classNames({ 'topicsclicked': (topic==='Best'), 'topicsNotclickced': (topic==='Top') })} onClick={()=>{setTopic('Best')}}>Best</span></Link>
                        <Link className="link" to="/home"><span className={classNames({ 'topicsclicked': (topic==='Top'), 'topicsNotclickced': (topic==='Best') })} onClick={()=>{setTopic('Top')}}>Top</span></Link>
                    </div>
                    
                        <Posts posts={posts}/>
                        
                </div>
                <div className="topGroups">
                    hello android
                </div>
            </div>  
            }
        </>
    )
}

export default Home
