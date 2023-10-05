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
    
  

    const deleteReply = (commentTree,parentId, commentId) =>{


        for(let comment of commentTree){
            if(comment.id === parentId){
                comment.children = comment.children.filter(cmt=> cmt.id !== commentId)
            }
            comment.children.length > 0 && deleteReply(comment.children, parentId, commentId)
            
        }
        

        
        }
    
    
        
    
        








export const commentSlice = createSlice({
    name:"comment",
    initialState: JSON.parse(localStorage.getItem("comments")) || [],
    reducers:{
addComment: (state, action) =>{
 
        state.unshift(action.payload)
 saveToLocalStorage(state)
        
    return state
},  


deleteComment : (state, action) =>{
    
    let {parentId, commentId} = action.payload
    if(!parentId){
         state = state.filter((cmt)=> cmt.id !== commentId)
    }else{

        deleteReply(state, parentId, commentId)
    }

    saveToLocalStorage(state)
  return state  
  
},

 addNewReply:(state, action) =>{
    const { parentId, replyObj} = action.payload


 insertReply(state, parentId, replyObj)
  saveToLocalStorage(state)
 return state
    
    }
    
 
    }
})

export const {addComment, deleteComment, addNewReply} = commentSlice.actions
export const getComments = (state)=> state.comment
export default commentSlice.reducer