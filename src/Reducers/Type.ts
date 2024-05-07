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
    type:"DELETE_Task"|"EDITE_Task",
    id:number
}
