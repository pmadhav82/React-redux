import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import todoReducer from "./features/todo-app/todoSlice"
import fetchPostReducer from "./features/fetchPost/fetchPostSlice";
import calculatorReducer from "./features/calculator/calculatorSlice";
import {apiSlice} from "./features/api/apiSlice";
import commentReducer from "./features/nastedComment/commentSlice";

const store = configureStore({
reducer:{
counter:counterReducer,
todoApp: todoReducer,
fetchPost:fetchPostReducer,
calculator:calculatorReducer,
comment: commentReducer,

[apiSlice.reducerPath]:apiSlice.reducer,

},
middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
devTools:true


});
export default store;