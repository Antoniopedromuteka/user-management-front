 
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { userDataProps } from "./UseUsersData";


interface tasksDataProps{
    id: string;
    name: string;
    tipo: string;
    data: string;
    user:userDataProps;
}

interface Props {
    children: ReactNode | ReactNode[]
}


export interface dataDeleteProps{
    id: string;
    name: string,
    tipo: string,
    data: string;
 
}

interface ITaskData{
    tasks: tasksDataProps[];
    tasksDone: tasksDataProps[];
    tasksDeleted: dataDeleteProps[];
    tasksLength: number;
    tasksDoneLength: number;
    setTasks: (task: tasksDataProps[]) => void;
    setTasksDone: (task: tasksDataProps[]) => void;
    setTasksDeleted: (task: dataDeleteProps[]) => void;
    
} 


export const TaskContext = createContext<ITaskData>({} as ITaskData);


export function TaskProvider({children} : Props){

        const [tasks, setTasks] = useState<tasksDataProps[]>([]);
        const [tasksDone, setTasksDone] = useState<tasksDataProps[]>([]);
        const [tasksDeleted, setTasksDeleted] = useState<dataDeleteProps[]>([]);

        useEffect(()=>{
            try{
                api.get("/tasks")
                .then(users => setTasks(users.data))
                .catch(err => console.log(err.response.data.message))
            }catch(err){
                alert("erro inesperado");   
            }         
        },[tasks])

    const tasksLength = tasks.length || 0;

    useEffect(()=>{
            try{
                api.get("/tasksDone")
                .then(users => setTasksDone(users.data))
                .catch(err => console.log(err.response.data.message))
            }catch(err){
                alert("erro inesperado");   
            }
        
    },[tasksDone])

    const tasksDoneLength = tasksDone.length || 0

    useEffect(()=>{

        try{
            api.get("/tasksdeleted")
            .then(tasks => setTasksDeleted(tasks.data))
            .catch(err => console.log(err.response.data.message))
        }catch(err){
            console.log("nao existe tarefa")
        }
    
        },[tasksDeleted])


    return(
        <TaskContext.Provider value={{tasks, tasksDone, tasksDeleted, tasksLength, tasksDoneLength, setTasks, setTasksDeleted,setTasksDone}}>
            {children}
        </TaskContext.Provider>
    )

} 




export function UseTasksData(){

    const {tasks,tasksDoneLength,tasksDone,tasksDeleted,tasksLength} = useContext(TaskContext);  
  

   return{
    tasks,
    tasksDeleted,
    tasksDone,
    tasksDoneLength,
    tasksLength,

   }


}