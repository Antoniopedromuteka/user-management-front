import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import {FormTasks} from "../components/Form/FormTasks"
 
 

import {useContext} from "react"


import { FormContext } from "../context/FormContext";
import { UseTasksData } from "../hooks/UseTasksData";
import { Task, TaskContext } from "../context/TaskContext";
import { Table } from "../components/Table";
 


export function Tasks(){
    
 

    const {tasks} = UseTasksData();

    
   
    const {setTypeForm,  isOpenModal, setIsOpenModal} = useContext(FormContext);
    const {typeTasks} = useContext(TaskContext);
    const {handleTypesTask, handleTypesTaskDeleted, handleTypesTaskDone} = UseTasksData();


    function handleModal(){
        
        setIsOpenModal(true);
        setTypeForm(true);
    }

    // async function handleDeleteTask(id:string){

    //     const response:boolean = window.confirm("Deseja apagar esta tarefa");

    //     if(response){

    //         const tasksDeleted = await api.delete(`/tasks/${id}`)
    //         .then(response => response.data)
    //         .catch(err => console.error(err));

    //         if(tasksDeleted){
    //             alert("tarefa deletada com sucesso!");
    //             setUpdate(!update)
    //         }
    //     }  

    // }

    // async function handleDoneTask(id:string){

    //     const response:boolean = window.confirm("A tarefa foi concluida com sucesso ?");

    //     if(response){

    //         const taskDone = await api.post(`/tasksDone/${id}`)
    //         .then(response => response.data)
    //         .catch(error => console.log(error));

    //         if(taskDone){
    //             alert("A tarefa foi concluida com sucesso!");
    //             setUpdate(!update)
    //         }

    //     }
    // }

    return(

        <>
            {isOpenModal && <FormTasks/>}
            <main className="flex  h-screen">
            <MenuLeft/>
            <section className="h-screen w-full  md:w-[calc(100%-320px)] m-0 md:ml-[320px] text-white">
            <HeaderDash/>
            <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-slate-900">
                    <div className="flex-1 flex flex-col pt-16 mx-6">
                    <div className="flex flex-1  text-2xl mb-8">
                        <div className="flex-1 md:flex-row   flex-col md:mx-5 mx-4 flex items-center">
                            <h2 className="text-3xl font-medium text-slate-900">Tarefas</h2>

                            <div className="w-full mt-6 justify-center  md:mt-0 flex md:mr-4 md:justify-end  ">
                                <ul className="flex  gap-2 items-center text-xl">
                                <li className="button" onClick={handleTypesTask}>Pendentes</li>
                                <li className="button" onClick={handleTypesTaskDeleted}>Deletadas</li>
                                <li className= "button" onClick={handleTypesTaskDone}>Feitas</li>
                                </ul>
                               {typeTasks === Task.task && (<button className="button ml-2 bg-sky-900" onClick={handleModal}>Adicionar</button>)}
                            </div>
                        </div>
                    </div>
                    
                         <Table/> 

                    </div>
                </section>
            </section>
            </main>
        </>
    );

}