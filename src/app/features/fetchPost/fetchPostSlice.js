import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
posts:null,
status:"idel",
error:null

}
const BASE_URL = "https://www.pblog.online/api/pmadhav279@gmail.com";

export const fetchPost = createAsyncThunk("fetch/post", async ()=>{
try{
const res = await fetch(BASE_URL);
if(!res.ok) throw Error("Failed to fetch post");
return res.json();
} catch(error){
    throw Error("Failed to fech post")
}

})


const postsSlice = createSlice({
    name:"fetchPost",
    initialState,
    reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(fetchPost.pending,(state,action)=>{
        state.status="loading"
    })
.addCase(fetchPost.fulfilled,(state,action)=>{
    state.status = "succeeded",
    state.posts = action.payload
})
.addCase(fetchPost.rejected, (state, action)=>{
    state.status = "failed",
     state.error = action.error
})
   }
})

export default postsSlice.reducer


export const getPosts = (state)=> state.fetchPost.posts;
export const getError = (state) => state.fetchPost.error;
export const getStatus = (state)=> state.fetchPost.status;