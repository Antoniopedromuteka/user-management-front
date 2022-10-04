
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { userDataProps } from "../hooks/UseUsersData";
import { api } from "../services/api";


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

export enum Task{
    task = "task",
    tasksDone= "tasksDone",
    tasksDeleted= "tasksDeleted"
}

interface ITaskData{
    tasks: tasksDataProps[];
    tasksDone: tasksDataProps[];
    tasksDeleted: dataDeleteProps[];
    update: boolean;
    tasksLength: number;
    tasksDoneLength: number;
    typeTasks: string;
    setTypeTasks: (tasks: Task) => void;
    setTasks: (task: tasksDataProps[]) => void;
    setTasksDone: (task: tasksDataProps[]) => void;
    setTasksDeleted: (task: dataDeleteProps[]) => void;
    setUpdate: (value: boolean ) => void;

} 




export const TaskContext = createContext<ITaskData>({} as ITaskData);


export function TaskProvider({children} : Props){

        const [tasks, setTasks] = useState<tasksDataProps[]>([]);
        const [tasksDone, setTasksDone] = useState<tasksDataProps[]>([]);
        const [tasksDeleted, setTasksDeleted] = useState<dataDeleteProps[]>([]);
        const [update, setUpdate] = useState(false);
        const [typeTasks, setTypeTasks] = useState<Task>(Task.task);

        useEffect(()=>{
            try{
                api.get("/tasks")
                .then(users => setTasks(users.data))
                .catch(err => console.log(err.response.data.message))
            }catch(err){
                alert("erro inesperado");   
            }         
        }, [update])

        const tasksLength = tasks.length

        useEffect(()=>{
            try{
                api.get("/tasksDone")
                .then(users => setTasksDone(users.data))
                .catch(err => console.log(err.response.data.message))
            }catch(err){
                alert("erro inesperado");   
            }
        },[update])

    
        const tasksDoneLength = tasksDone.length;
        useEffect(()=>{
            try{
                api.get("/tasksdeleted")
                .then(tasks => setTasksDeleted(tasks.data))
                .catch(err => console.log(err.response.data.message))
            }catch(err){
                console.log("nao existe tarefa")
            }

        }, [update])

    return(
        <TaskContext.Provider value={{typeTasks, setTypeTasks,update,setUpdate, tasks, tasksDone, tasksDeleted, tasksLength, tasksDoneLength, setTasks, setTasksDeleted,setTasksDone}}>
            {children}
        </TaskContext.Provider>
    )

} 


