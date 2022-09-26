 
import {useContext} from "react";
import { TaskContext } from "../context/TaskContext";



export function UseTasksData(){

    const {tasks,tasksDone,tasksDeleted} = useContext(TaskContext);  



   return{
    tasks,
    tasksDeleted,
    tasksDone,
   }


}