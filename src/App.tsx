import React, { useReducer } from "react";
import InputValue from"./Components/InputValueComponent/InputValueComponent"
import reducer from "./Reducers/Reducer"


function App(){
   const [tasks,dispatch]=useReducer(reducer,[])

  function onAdd(value: string) {
    dispatch({type:"ADD_Task",title:value})
  }  
  return(
  <>
  <InputValue onAdd={onAdd}/>
  </>
)}
export default App


