import * as API from '../api/index'

export const getPosts=async()=>{
    const data=await API.getPosts()
    return (dispatch)=>{
        dispatch({
            type:"GETPOSTS",
            payload:data
        })
    }
}