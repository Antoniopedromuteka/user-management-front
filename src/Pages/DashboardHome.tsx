import { MenuLeft } from "../components/MenuLeft"


import { Card } from "../components/Card"
import { HeaderDash } from "../components/HeaderDash"
import { UseTasksData } from "../hooks/UseTasksData"
import { UseUserData } from "../hooks/UseUsersData"
 



export const DashBoardHome = () =>{
    
const {usersLength} = UseUserData();
const {tasksDoneLength, tasksLength} = UseTasksData();

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
                    <div className="flex-1 flex py-10 mx-6 flex-wrap  gap-2">
                        {MookData.map(data => (
                                <Card title={data.title} value={data.value} icon={data.icon} key={data.title} />
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-1 justify-center text-2xl mb-8">
                                 <h2>Tarefas Pendentes</h2>
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

                            </thead>
                            <tbody>
                            {tasks && tasks.map(task => (
                                <tr key={task.id} className="border-b bg-black dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{task.name}</td>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{task.tipo}</td>
                                </th>
                                    
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{task.data}</td>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{task.user.name}</td>
                                </th>
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