import { Task } from "../../Reducers/Type"

export interface ListShowProp{
    taskShow:Task[],
    onDelete:(taskId:number)=>void
    onCheckBox:(itemId:number)=>void
}


function ListShow({taskShow,onDelete,onCheckBox}:ListShowProp){
    const handelDelete=(taskId:number)=>{
        onDelete(taskId)
    }

    const handelcheckBox=(itemId:number)=>{
        onCheckBox(itemId)
    }
    return(
        <>
            <ul>
                {taskShow.map((item)=>(
                    <div key={item.id}>
                        <input key={item.id} type="checkbox" 
                checked={item.done} 
                onChange={()=>{handelcheckBox(item.id)}}
                />
                <li key={item.id}>{item.title}</li>
                <button key={item.id} onClick={()=>handelDelete(item.id)}
                >انجام دادم
                </button>
                <button key={item.id}
                >
                ویرایش</button>
                </div>
                ))}
            </ul>
            </>
    )
}
export default ListShow


