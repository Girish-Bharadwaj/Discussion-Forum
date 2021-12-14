import * as API from '../api/index'

export const getPosts= () => async(dispatch)=>{
    dispatch({type:"STARTLOADING"})
    const data=await API.getPosts();
    dispatch({type:"GETPOSTS",payload:data})
    dispatch({type:"ENDLOADING"})
}

export const getMyposts=()=>async(dispatch)=>{
    dispatch({type:"STARTLOADING"})
    const data=await API.getPosts();
    dispatch({type:"GETMYPOSTS",payload:data})
    dispatch({type:"ENDLOADING"})
}