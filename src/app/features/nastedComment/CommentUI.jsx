
import { useState } from "react";
import { Card, Button , Form, Container} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Comment from "./Comment";
import { addComment, getComments } from "./commentSlice";

const CommentUI = ()=>{
    const dispatch = useDispatch();

const comments = useSelector(getComments)


const [ comment, setComment] = useState("");

const handleComment = (e)=>{
e.preventDefault();

if(!comment) return

 const commentObject = {
    id: new Date().getTime().toString(),
    text: comment,
    children:[],
    parentId:null

}
dispatch(addComment(commentObject))

setComment("");

}

    return <>
    <Card style={{width:"360px"}}>
      <Card.Header>
       Nested Comment
      </Card.Header>
      <Card.Body>

      
      <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Your Comment</Form.Label>
        <Form.Control value = {comment} onChange={(e)=> setComment(e.target.value)}  as="textarea" rows={3} />
      </Form.Group>
<Button variant="primary" type="submit" onClick={handleComment}  >Comment</Button>
    </Form>

   
        
    
      </Card.Body>

    </Card>


{comments?.length>0 && comments.map((comment)=>{
    return <Container>

        <Comment comment={comment}  key={comment.id}/>

    </Container>

})}
    </>

}

export default  CommentUI;