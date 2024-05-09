import React, { useState } from "react"
export interface valueProp{
    onAdd:(value:string)=>void,
}

function InputValue({onAdd}:valueProp){
    const [value,setValue]=useState("")
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