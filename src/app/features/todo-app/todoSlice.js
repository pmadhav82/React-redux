import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name:"todo",
    initialState:{
todo :[{
    id:1,
    task:"Go to the market"
}]
    },
    reducers:{
addTodo:(state, action)=>{
    state.todo.push(action.payload)
},

deleteTodo:(state, action)=>{
return state.todo.filter((task)=>{
    task.id!== action.payload;
})

}
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
