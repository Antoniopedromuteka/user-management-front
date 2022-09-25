import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import { ModalC } from "../components/Modal";
import { FormContext } from "../hooks/UseForm";
import { UseTasksData } from "../hooks/UseTasksData";
 

import {useContext} from "react"
import { AiFillDelete, AiOutlineFileDone } from "react-icons/ai";
import { api } from "../services/api";
 


export function Tasks(){
    
    const {tasks} = UseTasksData();

   

 
    const {setTypeForm,isOpenModal, setIsOpenModal} = useContext(FormContext);


    function handleModal(){
        setTypeForm("tasks");
        setIsOpenModal(true);
    }

    async function handleDeleteTask(id:string){

        const response:boolean = window.confirm("Deseja apagar esta tarefa");

        if(response){

            const tasksDeleted = await api.delete(`/tasks/${id}`)
            .then(response => response.data)
            .catch(err => console.error(err));

            if(tasksDeleted){
                alert("tarefa deletada com sucesso!");
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
                alert("A tarefa foi concluida com sucesso!")
            }

        }


    }

    return(

        <>
            {isOpenModal &&  <ModalC/>}
            <main className="flex  h-screen">
            <MenuLeft/>
            <section className="h-screen flex-1 md:w-[calc(100%-320px)] md:ml-[320px] text-white">
            <HeaderDash/>
            <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-slate-900">
                    <div className="flex-1 pt-16">
                    <div className="flex flex-1   text-2xl mb-8">
                        <div className="flex-1 md:mx-10 mx-2 flex justify-between items-center">
                            <h2>Tarefas</h2>
                             <button className="button" onClick={handleModal}>Adicionar</button>
                        </div>
                    </div>

                    {tasks.length ? (

                    <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">

                        

                    <table className="w-full relative  text-sm text-left  text-white dark:text-gray-400 ">

                    <thead className="text-xs text-white  bg-slate-800">
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

                    </thead>
                    <tbody>
                    {tasks && tasks.map(task => (
                        <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <td>{task.name.toUpperCase()}</td>
                        </th>
                        <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <td>{task.tipo.toUpperCase()}</td>
                        </th>
                            
                        <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <td>{task.data}</td>
                        </th>
                        <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <td>{task.user.name.toUpperCase()}</td>
                        </th>
                        <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                            <td className="flex items-center ">
                                <AiFillDelete className="text-2xl mx-2 text-red-400 cursor-pointer" onClick={() => handleDeleteTask(task.id)}/>
                                <AiOutlineFileDone className="text-2xl text-green-400 cursor-pointer" onClick={() => handleDoneTask(task.id)}/>
                            </td>
                        </th>
                        </tr> 
                    ))} 
                    </tbody>
                    </table> 
                    </div>

                    ):(
                        <h2 className="mx-6 text-2xl">Sem tarefas designadas</h2>
                    )}
             
                    

                                        
                     </div>
                </section>
            </section>
            </main>
        </>
    );

}