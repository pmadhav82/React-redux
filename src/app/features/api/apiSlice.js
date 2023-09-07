import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



 export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com"}),
    endpoints: builder =>({
        fetchPost:builder.query({
            query:()=>"/posts"
        })
    })
})
export  const {useFetchPostQuery} = apiSlice;


