 
import {useContext} from "react";
import { Task, TaskContext } from "../context/TaskContext";



export function UseTasksData(){

    const {tasks,tasksDone,tasksDeleted, setTypeTasks} = useContext(TaskContext);  


    function handleTypesTask(){
        setTypeTasks(Task.task);
    }    
    
    function handleTypesTaskDone(){
        setTypeTasks(Task.tasksDone);
    }

    function handleTypesTaskDeleted(){
        setTypeTasks(Task.tasksDeleted);
    }



   return{
    handleTypesTaskDeleted,
    handleTypesTask,
    handleTypesTaskDone,
    tasks,
    tasksDeleted,
    tasksDone,
   }


}