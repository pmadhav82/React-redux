import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import todoReducer from "./features/todo-app/todoSlice"
import fetchPostReducer from "./features/fetchPost/fetchPostSlice";
const store = configureStore({
reducer:{
counter:counterReducer,
todoApp: todoReducer,
fetchPost:fetchPostReducer
}


});
export default store;