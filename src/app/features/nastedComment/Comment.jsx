
import { Button } from "react-bootstrap";
import AddReply from "./Addreply";
import { useDispatch } from "react-redux";
import { deleteComment } from "./commentSlice";

const Comment = ({comment}) =>{
const dispatch = useDispatch()

    return<> 

    <div style={{padding:".5rem .2rem", background:"wheat"}}>
    <p>
        {comment.text}
    </p>
<div>
<div style={{display:"flex", gap:".2rem"}}>
<AddReply id={comment.id}  key={comment.id}/>
<Button variant="secondary" size="sm" onClick={()=>  dispatch(deleteComment({parentId:comment.parentId, commentId: comment.id}))}>Delete</Button>

</div>
</div>


        
    </div>

    
{comment.children?.length>0 && comment.children.map((reply)=>{
    return <div style = {{marginLeft:"40px", marginTop:".2rem"}}>
    <Comment  comment={reply} key={reply.id} />
    </div> 

    })
    
}
    
    </>
}
export default Comment;