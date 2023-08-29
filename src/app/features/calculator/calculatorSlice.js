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
    clear:(state)=>{
state = initialState;
return state;
    }
}
})

export const {addDigit, clear, chooseOperation} = calculatorSlice.actions;
export default calculatorSlice.reducer;

export const getCurrentOperant = (state)=>state.calculator.currentOperant;
export const getPreviousOperant = (state)=>state.calculator.previousOperant;
export const getOperation = (state)=>state.calculator.operation;