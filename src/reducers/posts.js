export const postreducer=(state={posts:[],isLoading:false},action)=>{
    switch(action.type){
        case 'GETPOSTS':
            return{
                ...state,
                posts:action.payload
            }
        case 'GETMYPOSTS':
            return{
                ...state,
                posts:action.payload
            }
        case 'STARTLOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'ENDLOADING':
            return{
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}