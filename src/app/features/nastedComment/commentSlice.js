import { createSlice } from "@reduxjs/toolkit";


const insertReply = (commentTree, parentId, replyObj) =>{

    for(let comment of commentTree){
        if(comment.id === parentId){
            comment.children.unshift(replyObj)
        }
        comment.children.length > 0 && insertReply(comment.children, parentId, replyObj)
        
    }
    return commentTree
    
    }


const saveToLocalStorage = (state) =>{
    return localStorage.setItem("comments", JSON.stringify(state))
}




export const commentSlice = createSlice({
    name:"comment",
    initialState: JSON.parse(localStorage.getItem("comments")) || [],
    reducers:{
addComment: (state, action) =>{
 
        state.unshift(action.payload)
saveToLocalStorage(state)
        return state;
    
},  

editComment: (state, action)=>{

},
deleteComment: (state, action) =>{

},

 addNewReply:(state, action) =>{
    const { parentId, replyObj} = action.payload

 insertReply(state, parentId, replyObj)
 saveToLocalStorage(state)
 return state
    
    }
    
 
    }
})

export const {addComment, editComment, deleteComment, addNewReply} = commentSlice.actions
export const getComments = (state)=> state.comment
export default commentSlice.reducer