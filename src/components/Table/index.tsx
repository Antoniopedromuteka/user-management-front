import { useContext } from "react";
import { AiFillDelete, AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FormContext } from "../../context/FormContext";
import { Task, TaskContext } from "../../context/TaskContext";
import { UseTasksData } from "../../hooks/UseTasksData";
import { api } from "../../services/api";
 


export function Table(){

    const {typeTasks, tasks, tasksDeleted, tasksDone} = useContext(TaskContext);

    const {setTypeForm,isOpenModal, setIsOpenModal} = useContext(FormContext);
    const {update, setUpdate} = useContext(TaskContext);
  
 


    function handleModal(){
        setIsOpenModal(true);
        setTypeForm(true);
    }

    async function handleDeleteTask(id:string){
        const response:boolean = window.confirm("Deseja apagar esta tarefa");
        if(response){

            const tasksDeleted = await api.delete(`/tasks/${id}`)
            .then(response => response.data)
            .catch(err => console.error(err));

            if(tasksDeleted){
                alert("tarefa deletada com sucesso!");
                setUpdate(!update)
            }
        }  

    }

    async function handleDoneTask(id:string){

        const response:boolean = window.confirm("A tarefa foi concluida com sucesso ?");

        if(response){

            const taskDone = await api.post(`/tasksDone/${id}`)
            .then(response => response.data)
            .catch(error => console.log(error));

            if(taskDone){
                alert("A tarefa foi concluida com sucesso!");
                setUpdate(!update)
            }

        }
    }

 

    return(

        <div className="container mx-auto flex flex-1  rounded-lg">

         {typeTasks === Task.task && (
            tasks.length ? (
                <div className="flex-1  flex  overflow-auto   rounded-lg">

                <table className="flex-1   text-sm text-left  text-white dark:text-gray-400 ">

                <thead className="text-xs text-white  bg-slate-800">
                <tr>   
                <th scope="col" className="py-3 px-6">
                    Nome
                </th>
                <th scope="col" className="py-3 px-6">
                    Tipo
                </th>
                <th scope="col" className="py-3 px-6">
                    Data
                </th>
                <th scope="col" className="py-3 px-6">
                    Responsavel
                </th>
                <th scope="col" className="py-3 px-6">
                    Açcões
                </th>

                </tr>

                </thead>
                <tbody>
                {tasks && tasks.map(task => (
                    <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                    <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.name.toUpperCase()}</td>
                        <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.tipo}</td>
                        <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.data.toUpperCase()}</td>
                        <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.user.name}</td>


                        <td className="flex items-center p-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <AiFillDelete className="text-2xl mx-2 text-red-400 cursor-pointer" onClick={() => handleDeleteTask(task.id)}/>
                            <AiOutlineFileDone className="text-2xl text-green-400 cursor-pointer" onClick={() => handleDoneTask(task.id)}/>
                        </td>
                    </tr> 
                ))} 
                </tbody>
                </table> 
                </div>

            ):(
                <h2 className="mx-6 text-2xl">Sem tarefas designadas</h2>
            ))}
     
            {typeTasks === Task.tasksDone && (
                tasksDone.length ? (
                    <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">

                    <table className="flex-1   text-sm text-left  text-white dark:text-gray-400 ">

                    <thead className="text-xs text-white  bg-slate-800">

                    <tr>   
                    <th scope="col" className="py-3 px-6">
                        Nome
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Tipo
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Data
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Responsavel
                    </th>

                    <th scope="col" className="py-3 px-6">
                        Status
                    </th>

                    </tr>

                    </thead>
                    <tbody>
                    {tasksDone && tasksDone.map(task => (
                      <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.name.toUpperCase()}</td>
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.tipo}</td>
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.data.toUpperCase()}</td>
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.user.name}</td>
                            <td className="flex py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white"> 
                                 <MdOutlineDone className="mx-2 text-2xl text-green-400"/>
                            </td>
                        </tr> 
                    ))} 
                    </tbody>
                    </table> 
                    </div> 
                 ):(
                     <h2 className="mx-6 text-2xl">Sem tarefas terminada</h2>
                 )       
            )}

            {typeTasks === Task.tasksDeleted && (
                 tasksDeleted.length ? (
                    <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">
                            
                    <table className="flex-1 text-sm text-left  text-white dark:text-gray-400 ">

                    <thead className="text-xs text-white  bg-slate-800">
                    <tr>    
                    <th scope="col" className="py-3 px-6">
                        Nome
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Tipo
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Data
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Status
                    </th>
                    </tr>

                    </thead>
                    <tbody>
                    {tasksDeleted && tasksDeleted.map(task => (
                        <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.name.toUpperCase()}</td>
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.tipo}</td>
                            <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.data.toUpperCase()}</td>
                            <td className="flex items-center py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white"><RiDeleteBin2Line className="mx-2 text-2xl text-red-400"/></td>
                        </tr> 
                    ))} 
                    </tbody>
                    </table> 
                    </div> 

                    ):(
                    <h2 className="mx-6 text-2xl">Sem tarefas deletadas</h2>
                    )
             
            )}
            
         </div>

    );


}