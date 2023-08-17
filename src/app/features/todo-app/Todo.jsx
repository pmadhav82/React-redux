import { Container, Button, Card, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import EditTask from "./EditTask";

const Todo = ()=>{
const todoList = useSelector((state)=>state.todoApp.todo);

const dispatch = useDispatch();
const [task, setTask] = useState("");


const submitHandeler =(e)=>{
    e.preventDefault();

    if(task == "") return

let taskObject = {
    id: Date.now().toString(),
    task
}
 dispatch(addTodo(taskObject));
 setTask("");
}

    return<>
    <Container className="d-flex flex-column justify-content-center align-items-center m-2 ">
        <Form  className="m-2 w-50">
            <Card>
<Card.Body>
    <Form.Group className="m-2" controlId="formBasicPassword">
        <Form.Label>Add Task</Form.Label>
        <Form.Control type="text" placeholder="Enter new task" value={task} onChange={(e)=>setTask(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={submitHandeler} type="submit">
        Add Task
      </Button>

</Card.Body>

            </Card>
        </Form>




{todoList.length>0?<>

    {todoList.map((todo)=>{
       return <Card key={todo.id} className="text-center w-50 m-1">
    <Card.Body>
   <Card.Text>
    {todo.task}
   </Card.Text>
        <div className="btn-group">
            <EditTask id={todo.id} toEditTask={todo.task} key={todo.id}/>
        <Button variant="secondary"  size="sm" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
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

