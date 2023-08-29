import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import todoReducer from "./features/todo-app/todoSlice"
import fetchPostReducer from "./features/fetchPost/fetchPostSlice";
import calculatorReducer from "./features/calculator/calculatorSlice";
const store = configureStore({
reducer:{
counter:counterReducer,
todoApp: todoReducer,
fetchPost:fetchPostReducer,
calculator:calculatorReducer
}


});
export default store;