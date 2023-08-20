import { Container, Button, Card, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment, incrementByAmount, decrement, decrementByAmount } from "./counterSlice";

const Counter = ()=>{
const [addAmount, setAddAmount] = useState("");

const count = useSelector((state)=> state.counter.count);


const dispatch = useDispatch();


const amountHandeler = (e)=>{
    if(!Number(e.target.value)){
        return setAddAmount("");
    }
    setAddAmount(e.target.value);
}

    return<>
   
    <Card className="text-center ">
      <Card.Header>Counter App</Card.Header>
      <Card.Body>
        <Card.Title>{count}</Card.Title>
       <div style={{display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center"}}>
        <Button variant="primary" onClick={()=>dispatch(increment())}>+</Button>
        <Button variant="secondary" onClick={()=>dispatch(decrement())}>-</Button>
       </div>

       <InputGroup className="m-2">
        <Form.Control
        onChange={amountHandeler}
         value={addAmount}
        />
        <Button variant="primary" id="button-addon2" onClick={()=>dispatch(incrementByAmount(Number(addAmount)||0))}>
        Add Amount
        </Button>
        <Button variant="secondary" id="button-addon2" onClick={()=> dispatch(decrementByAmount(Number(addAmount)||0))}>
        Subtract Amount
        </Button>
      </InputGroup>

    
    
      </Card.Body>
    
    </Card>

  
    </>
}

export default Counter;