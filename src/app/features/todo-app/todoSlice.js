import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name:"todo",
    initialState:{
todo :[]
    },
    reducers:{
addTodo:(state, action)=>{
    state.todo.push(action.payload)
},

deleteTodo:(state, action)=>{
state.todo = state.todo.filter(todo=> todo.id !== action.payload);
},
editTodo: (state, action)=>{
    let taskToEdit = state.todo.find((todo)=>{
        return todo.id === action.payload.id;
    })
    
     taskToEdit.task = action.payload.task;
     return state;
}
    }
})

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
