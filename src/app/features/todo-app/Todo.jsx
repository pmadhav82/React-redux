import { Container, Button, Card, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Todo = ()=>{
const todoList = useSelector((state)=>state.todoApp.todo);

    return<>
    <Container className="d-flex flex-column justify-content-center align-items-center m-2 ">
        <Form  className="m-2 w-50">

    <Form.Group className="m-2" controlId="formBasicPassword">
        <Form.Label>Add Task</Form.Label>
        <Form.Control type="text" placeholder="Enter new task" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>




{todoList.length>0?<>

    {todoList.map((todo)=>{
       return <Card key={todo.id} className="text-center w-50">
    <Card.Body>
        {todo.task}
        <div style={{display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center"}}>
        <Button variant="primary" size="sm" >Edit</Button>
        <Button variant="secondary"  size="sm">Delete</Button>
       </div>
    </Card.Body>
        </Card>
    })}
</>:<Card className="w-50">
    <Card.Body>
        You do not have any to-do list.
      
    </Card.Body>
    </Card>}



    </Container>
    
    </>
}

export default Todo;

