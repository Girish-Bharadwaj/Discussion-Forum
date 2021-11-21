export const postreducer=(state={posts:[]},action)=>{
    switch(action.type){
        case 'GETPOSTS':
            return{
                ...state,
                posts:action.payload
            }
        default:
            return state
    }
}