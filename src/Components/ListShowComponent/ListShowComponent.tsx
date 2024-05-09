import { Task } from "../../Reducers/Type"

export interface ListShowProp{
    taskShow:Task[],
    onDelete:(taskId:number)=>void
    onEdite:(taskId:Task)=>void
}


function ListShow({taskShow,onDelete,onEdite}:ListShowProp){
    const handelDelete=(taskId:number)=>{
        onDelete(taskId)
    }
    const handelEdite=(task:Task)=>{
        onEdite(task)
    }
    return(
        <>
                <ul>
                    {taskShow.map((item)=>(
                        <div key={item.id}>
                        <input key={item.id} type="checkbox" 
                        checked={item.done} 
                        />
                        <li key={item.id}>{item.title}</li>
                        <button key={item.id} onClick={()=>handelDelete(item.id)}
                        >انجام دادم
                        </button>
                        <button key={item.id}
                            onClick={()=>handelEdite(item)}
                        >
                            ویرایش</button>
                        </div>
                    ))}
                </ul>
        </>
    )
}
export default ListShow


