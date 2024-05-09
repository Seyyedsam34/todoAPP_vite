import React, { useReducer} from "react";
import InputValue from"./Components/InputValueComponent/InputValueComponent"
import reducer from "./Reducers/Reducer"
import ListShow from "./Components/ListShowComponent/ListShowComponent";
// import { Task } from "./Reducers/Type";
import data from "./data/data";


function App(){
   const [tasks,dispatch]=useReducer(reducer,data)
  //  const[update,setupdate]=useState<Task| null>(null)
  function onAdd(value: string) {
    dispatch({type:"ADD_Task",title:value})
  }
  function onDelete(taskId:number){
    dispatch({type:"DELETE_Task",id:taskId})
  } 
  function onCheckBox(taskId:number){
    dispatch({type:"CHECKBOX_Task",id:taskId})
  }   

  return(
  <>
  <InputValue onAdd={onAdd} />
  <ListShow onCheckBox={onCheckBox} 
    taskShow={tasks} 
    onDelete={onDelete} 
  />
  
  </>
)}
export default App


