 
import { MdOutlineDone } from "react-icons/md";
import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import { UseTasksData } from "../hooks/UseTasksData";
 




export function TasksDone(){
 
    const {tasksDone} = UseTasksData();


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
                            <h2>Tarefas Concluidas</h2>
                             
                        </div>
                    </div>

            {tasksDone.length ? (
                    <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">

                    <table className="w-full relative  text-sm text-left  text-white dark:text-gray-400 ">

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
            )}             
                </div>
                </section>
            </section>
            </main>
        </>
    );
}