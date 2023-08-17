import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { editTodo } from './todoSlice';
import { useDispatch } from 'react-redux';
const EditTask =({id, toEditTask})=> {
const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  const [task, setTask] = useState(toEditTask);
  
  
  const inputHandeler =  (e)=>{
      setTask(e.target.value)
  }
  
  const formHandeler =   (e)=>{
      e.preventDefault();
if(task === ""){
  dispatch(editTodo({id, toEditTask}));
}
  dispatch(editTodo({id,task}));
  
  handleClose();
  }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
  
          <Modal.Header closeButton>
            <Modal.Title> Edit Task</Modal.Title>
          </Modal.Header>
            <Form>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  name = "task"
                  value = {task}
                  onChange = {inputHandeler}
                />
              </Form.Group>
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancle
            </Button>
            <Button type = "submit" variant="primary" onClick={formHandeler}>
              Edit
            </Button>
          </Modal.Footer>
  
            </Form>
        </Modal>
      </>
    );
  }
  
  export default EditTask;