import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewReply } from "./commentSlice";

const AddReply = ({ id})=>{
const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const [reply, setReply] = useState("")



const addReply = ()=>{
  if(!reply) return handleClose()

  let replyObj = {
    id : new Date().getTime().toString(),
text:reply,
children:[],
parentId:id
}

dispatch(addNewReply({parentId:id, replyObj}))
setReply("");
handleClose()
}

 
    return<>
    <Button size="sm" onClick={handleShow}>Reply</Button>
    
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Reply</Modal.Title>
        </Modal.Header>

      <Form>
        <Modal.Body>
           
     
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label>Enter Your reply</Form.Label>
       <Form.Control   as="textarea" onChange={(e)=>setReply(e.target.value)} value={reply} rows={3} />
     </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addReply} variant="primary">Add Reply</Button>
        </Modal.Footer>
   </Form>
      </Modal>

    </>
}
export default AddReply