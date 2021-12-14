import axios from 'axios'


export const getPosts=async()=>{
    const {data}= await axios.get('http://localhost:3000/post/get')
    return data
}
export const getMyPosts=async()=>{
    const {data}= await axios.head('http://localhost:3000/post/myposts',{
        headers:{
            authorization:"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImhlbGxvMSIsImVtYWlsSWQiOiJoZWxsbzEyNEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnTVppN0x2ZjRGd3oxelV3SkRoeUh1a1BIZ0lFdEVPUkhvWkVpQkZMZ0JhWEdZR3B6U1FZbSIsIl9pZCI6IjYxOTc0YjNmNWEyNDY2M2MxZDQ4OTI5OCIsIl9fdiI6MH0.GnPEXY4YOzoUQWqCUGJrCIQdP3CK_55u44cCEGFYcPI"
        }
    })
    return data
}