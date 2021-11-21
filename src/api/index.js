import axios from 'axios'


export const getPosts=async()=>{
    const {data}= await axios.get('http://localhost:3000/post/get')
    console.log({data})
    return data
}