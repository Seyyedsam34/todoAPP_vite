import React, { useState } from "react"
import { Task } from "../../Reducers/Type"

export interface valueProp{
    onAdd:(value:string)=>void,
    sendValue:Task
}

function InputValue({onAdd,sendValue}:valueProp){
    const [value,setValue]=useState("")
    console.log(sendValue)
    const handelSubmit=()=>{
        if(value.length){
            onAdd(value)
        setValue("")
        }
    }
    
    return(
        <>
        <div>
            <input type="text" placeholder="نمرینات ری اکت "
            value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <span>
            <button
                onClick={handelSubmit}
            >...بزن بریم</button></span>
        </div>
        </>
    )
}
export default InputValue