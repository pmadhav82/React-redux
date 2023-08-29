import { useDispatch } from "react-redux";
import { chooseOperation } from "./calculatorSlice";
const Operation = ({operation})=>{
    const dispatch = useDispatch();

    return<button onClick={()=>dispatch(chooseOperation(operation))}>{operation}</button>
}
export default Operation;