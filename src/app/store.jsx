import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import todoReducer from "./features/todo-app/todoSlice"
const store = configureStore({
reducer:{
counter:counterReducer,
todoApp: todoReducer
}


});
export default store;