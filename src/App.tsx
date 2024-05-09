import React, { useReducer, useState } from "react";
import InputValue from"./Components/InputValueComponent/InputValueComponent"
import reducer from "./Reducers/Reducer"
import ListShow from "./Components/ListShowComponent/ListShowComponent";
import { Task } from "./Reducers/Type";


function App(){
   const [tasks,dispatch]=useReducer(reducer,[])
  const[update,setupdate]=useState<Task| null>(null)
  function onAdd(value: string) {
    dispatch({type:"ADD_Task",title:value})
  }
  function onDelete(taskId:number){
    dispatch({type:"DELETE_Task",id:taskId})
  }  
  function onEdite(tasdId:Task){
    const valueTask:Task=tasdId
    setupdate(valueTask)
  }
  return(
  <>
  <InputValue onAdd={onAdd} sendValue={update} />
  <ListShow taskShow={tasks} onDelete={onDelete} onEdite={onEdite}/>
  
  </>
)}
export default App


