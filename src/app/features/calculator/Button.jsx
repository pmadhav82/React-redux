import { useDispatch } from "react-redux";
import { addDigit } from "./calculatorSlice";

const Button = ({digit})=>{
const dispatch = useDispatch();

    return<button onClick={()=>dispatch(addDigit(digit))}>{digit}</button>
}
export default Button;