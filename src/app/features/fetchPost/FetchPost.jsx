import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Button, Card } from "react-bootstrap";
import { getPosts, getError, getStatus, fetchPost } from "./fetchPostSlice";
const FetchPost = ()=>{
const dispatch = useDispatch();
const posts = useSelector(getPosts);
const status = useSelector(getStatus);

const error = useSelector(getError);

useEffect(()=>{
dispatch(fetchPost());

},[dispatch])

    return<>
    {status === "loading" && <p>Loading....</p>}
    {status === "failed" && error.message}


{status === "succeeded" && posts.map((post, index)=>{
    return <Card className=" p-1 m-2" >
        <Card.Title>
            {post.title}
        </Card.Title>
    </Card>
})}
    
    
    
    </>
}

export default FetchPost;