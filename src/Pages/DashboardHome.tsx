import { MenuLeft } from "../components/MenuLeft"


import { Card } from "../components/Card"
import { HeaderDash } from "../components/HeaderDash"
import { UseTasksData } from "../hooks/UseTasksData"
import { UseUserData } from "../hooks/UseUsersData"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
 



export const DashBoardHome = () =>{
    
const {usersLength} = UseUserData();
 
const {tasksLength, tasksDoneLength} = useContext(TaskContext)

const MookData = [

    {
        title: "Usuarios",
        value : usersLength,
        icon : "HiUsers"
    },
    {
        
        title: "Tarefas",
        value : tasksLength,
        icon : "BiTask"
    },
    {
        
        title: "Tarefas Concluidas",
        value : tasksDoneLength,
        icon : "BiTask"
    }


]
    const {tasks} = UseTasksData();

    return(
        <>
        <main className="flex  h-screen">
            <MenuLeft/>
            <section className="h-screen flex-1 md:w-[calc(100%-320px)] md:ml-[320px] text-white">
               <HeaderDash/>
                <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-slate-900">
                    <div className="flex-1 flex py-10 mx-4 flex-wrap  gap-1">
                        {MookData.map(data => (
                                <Card title={data.title} value={data.value} icon={data.icon} key={data.title} />
                        ))}
                    </div>
                    <div className="flex-1 flex-wrap">
                        <div className="flex flex-1 justify-center text-2xl mb-8">
                                 <h2>Tarefas Pendentes</h2>
                        </div>

                       {tasks.length ? (
                            <div className= "flex flex-1  md:mx-10 mx-6 overflow-x-auto  rounded-lg">
                            <table className="w-full relative   text-sm text-left  text-white dark:text-gray-400 ">

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
                            </tr>

                            </thead>
                            <tbody>
                            {tasks && tasks.map(task => (
                                    <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                                    <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.name.toUpperCase()}</td>
                                     <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.tipo}</td>
                                     <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.data.toUpperCase()}</td>
                                    <td className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">{task.user.name}</td>

                                   
                                 </tr> 
                            ))} 
                            </tbody>
                            </table> 
                            </div>

                       ) : (

                            <h2 className="mx-6 text-2xl">Sem tarefas</h2>
                       )}     
                    </div>
                </section>
            </section>
        </main>
        </>
    )

}