import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Posts from '../Posts/Posts'
function Home() {
    const [topic, setTopic] = useState('Best');
    return (
        <>
          <Navbar/>
            <div className="home">
                <div>
                    <div className="topics">
                        <Link className="link" to="/"><span  className={classNames({ 'topicsclicked': (topic==='Best'), 'topicsNotclickced': (topic==='Top') })} onClick={()=>{setTopic('Best')}}>Best</span></Link>
                        <Link className="link" to="/"><span className={classNames({ 'topicsclicked': (topic==='Top'), 'topicsNotclickced': (topic==='Best') })} onClick={()=>{setTopic('Top')}}>Top</span></Link>
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
