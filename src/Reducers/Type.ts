export interface Task{
    id:number,
    title:string,
    date:string,
    dateUpdate:string,
    done:boolean
}


export type typeAction=
|{
    type:"ADD_Task",
    title:string
}|{
    type:"DELETE_Task",
    id:number
}
|{
    type:"EDITE_Task",
    id:Task
}
