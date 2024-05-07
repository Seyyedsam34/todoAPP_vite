import { Task,typeAction } from "./Type";




function reducer(tasks:Task[],action:typeAction,){

    switch(action.type){
        case "ADD_Task":{
            return[
                ...tasks,
                {
                    id:Math.floor(Math.random()*1000),
                    title:action.title,
                    date:new Date().toLocaleDateString('fa-IR'),
                    dateUpdate:" ",
                    done:false
                }
            ]
        }
        default:
            return tasks
    }

}
export default reducer