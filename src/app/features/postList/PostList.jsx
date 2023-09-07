import { useFetchPostQuery } from "../api/apiSlice";
const PostList = ()=>{
const {data, isError, isLoading, isSuccess} = useFetchPostQuery()


    return<> <div>


    {isLoading && <p>Loading...</p>}
    {isError && <p>Something went wrong, try again...!</p>}
  {isSuccess && data.map((d)=>{
    return <>
<p key={d.id}>{d.body} </p>
    
    </>

    
  })}

    </div>
    </>
}
export default PostList;