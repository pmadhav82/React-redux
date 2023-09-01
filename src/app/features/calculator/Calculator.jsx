import Button from "./Button";
import Operation from "./Operation";
import  "./calculator.css";
import { getCurrentOperant, clear, getOperation, getPreviousOperant, calculate, deleteDigit} from "./calculatorSlice";
import { useSelector, useDispatch } from "react-redux";
const Calculator = ()=>{
const dispatch = useDispatch();

const previousOperant = useSelector(getPreviousOperant);
const currentOperant = useSelector(getCurrentOperant);
const operation = useSelector(getOperation);


const formatNumber = (number)=>{
  let numberFormat =   new Intl.NumberFormat();
  if(number == null)return

  const [integer, decimal] = number.split(".");
  if(decimal == null) return numberFormat.format(number);
  return `${numberFormat.format(integer)}.${decimal}`;
}

    return<>
   <div className="calculator-grid">
    <div className="output">

    <div className="previous-operant">{previousOperant}{operation}</div>
    <div className="current-operant">{formatNumber(currentOperant)}</div>

    </div>
  <button className="span-two" onClick={()=>dispatch(clear())} >AC</button>
  <button  onClick={()=>dispatch(deleteDigit())}>DEL</button>
<Operation operation = "÷"/>

<Button  digit="1"/>
<Button digit="2"/>
<Button digit="3" />

<Operation operation="*"/>

<Button digit="4"/>
<Button digit="5"/>
<Button digit="6" />

<Operation operation="+"/>

<Button digit="7"/>
<Button digit="8"/>
<Button digit="9" />

<Operation operation="-"/>

<Button digit="."/>
<Button digit="0" />
<button className="span-two" onClick={()=>dispatch(calculate())}>=</button>

   </div>
    </>
}
export default Calculator;