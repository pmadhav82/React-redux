
import { Button } from "react-bootstrap";
import AddReply from "./Addreply";
import { useDispatch } from "react-redux";
import { deleteComment, replyDelete } from "./commentSlice";

const Comment = ({comment, deleteReply}) =>{
const dispatch = useDispatch()

const deleteHandeler = (id)=>{
    if(deleteReply){
dispatch(replyDelete(id))
    }else{

        dispatch(deleteComment(id))
    }
}

    return<> 

    <div style={{padding:".5rem .2rem", background:"wheat"}}>
    <p>
        {comment.text}
    </p>
<div>
<div style={{display:"flex", gap:".2rem"}}>
<AddReply id={comment.id}  key={comment.id}/>
<Button variant="secondary" size="sm" onClick={()=> deleteHandeler(comment.id)}>Delete</Button>

</div>
</div>


        
    </div>

    
{comment.children?.length>0 && comment.children.map((reply)=>{
    return <div style = {{marginLeft:"40px", marginTop:".2rem"}}>
    <Comment deleteReply={replyDelete}  comment={reply} key={reply.id} />
    </div> 

    })
    
}
    
    </>
}
export default Comment;