import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentOperant:null,
    previousOperant:null,
    operation:null
}

const evaluate = ({previousOperant,currentOperant,operation})=>{
const preValue = parseFloat(previousOperant);
const currentValue = parseFloat(currentOperant);

let compution = "";
if(isNaN(preValue) || isNaN(currentValue)) return compution = "0";
switch(operation){
    case("+"):
    compution = preValue + currentValue;
break;
case("-"):
compution = preValue - currentValue;
break
case("*"):
compution = preValue * currentValue;
  break
  case("÷"):
  if(currentValue ==0) return compution = "can not devide by zero";
  compution = preValue / currentValue; 
 
}
return compution.toString();

}

export const calculatorSlice = createSlice({
name:"calculator",
initialState,
reducers:{
    addDigit:(state,action)=>{

        if(state.currentOperant ==="0" && action.payload ==="0")return state;
        
        if(state.currentOperant?.includes(".") && action.payload === ".") return state;

        if(state.overwrite == true) {
            state.currentOperant = action.payload;
            state.overwrite = false;
            return state;
            
        }

        state.currentOperant= `${state.currentOperant || ""}${action.payload}`;
        return state;
        
    },
    chooseOperation: (state, action)=>{
if(state.currentOperant == null && state.previousOperant == null)return state;

if(state.previousOperant == null){
    state.previousOperant = state.currentOperant;
    state.operation = action.payload;
state.currentOperant = null;
return state;
    
}
if(state.currentOperant == null){
    state.operation = action.payload;
    return state;
}

state.previousOperant = evaluate(state);
state.operation = action.payload;
state.currentOperant = null;
return state;
    },
    calculate:(state)=>{
if(state.currentOperant == null ||
    state.previousOperant == null||
    state.operation == null) return state;


    state.currentOperant = evaluate(state);
    state.operation = null;
    state.previousOperant = null;
    state.overwrite = true;
    return state;

    },
    deleteDigit:(state)=>{
if(state.overwrite){
    state.currentOperant = null;
    state.overwrite = false;
    return state;
}

if(state.currentOperant == null)return state;

if(state.currentOperant.length === 1) {
    state.currentOperant = null;
    return state
}

state.currentOperant = state.currentOperant.slice(0,-1)
return state;
    },
    clear:(state)=>{
state = initialState;
return state;
    }
}
})

export const {addDigit, clear, chooseOperation, calculate, deleteDigit} = calculatorSlice.actions;
export default calculatorSlice.reducer;

export const getCurrentOperant = (state)=>state.calculator.currentOperant;
export const getPreviousOperant = (state)=>state.calculator.previousOperant;
export const getOperation = (state)=>state.calculator.operation;