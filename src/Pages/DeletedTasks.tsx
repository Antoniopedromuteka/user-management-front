 
import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import { UseTasksData } from "../hooks/UseTasksData";

import {RiDeleteBin2Line} from "react-icons/ri"
 


export function DeletedTasks(){

    const {tasksDeleted} = UseTasksData();
    return(
        <>
            <main className="flex  h-screen">
            <MenuLeft/>
            <section className="h-screen flex-1 md:w-[calc(100%-320px)] md:ml-[320px] text-white">
            <HeaderDash/>
            <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-slate-900">
                    <div className="flex-1 pt-16">
                    <div className="flex flex-1  text-2xl mb-8">
                        <div className="flex-1 md:mx-10 mx-2 flex justify-between items-center">
                            <h2>Tarefas Deletadas</h2>
                             
                        </div>
                    </div>
                    <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">

                            
                        {tasksDeleted.length ? (
                            
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
                                Status
                            </th>
                        
    
                            </thead>
                            <tbody>
                            {tasksDeleted && tasksDeleted.map(task => (
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
                                    <td className="flex items-center"><RiDeleteBin2Line className="mx-2 text-2xl text-red-400"/></td>
                                </th>
                               
                                </tr> 
                            ))} 
                            </tbody>
                            </table> 


                        ):(
                            <h2 className="mx-6 text-2xl">Sem tarefas deletadas</h2>
                        )}
                     
                        </div>

                                            
                </div>
                </section>
            </section>
            </main>
        </>
    );
}