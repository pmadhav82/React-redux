
import { Button } from "react-bootstrap";
import AddReply from "./Addreply";
const Comment = ({comment}) =>{




    return<> 

    <div style={{padding:".5rem .2rem", background:"wheat"}}>
    <p>
        {comment.text}
    </p>
<div>
<div style={{display:"flex", gap:".2rem"}}>
<AddReply id={comment.id}  key={comment.id}/>
<Button variant="secondary" size="sm">Delete</Button>

</div>
</div>


        
    </div>

    
{comment.children?.length>0 && comment.children.map((reply)=>{
    return <div style = {{marginLeft:"40px", marginTop:".2rem"}}>
    <Comment comment={reply} key={reply.id} />
    </div> 

    })
    
}
    
    </>
}
export default Comment;