

import {MdOutlineSpaceDashboard} from "react-icons/md"

import {FiUsers} from "react-icons/fi"
import {BiTask, BiTaskX} from "react-icons/bi"
import {CgMoveTask} from "react-icons/cg"
import { Link } from "react-router-dom"


export function MenuLeft(){

    return(
        <>

            <div className="md:flex-1 w-96 md:flex flex-col md:max-w-xs hidden md:bg-neutral-900 fixed top-0 left-0 bottom-0">
                <div className="my-4  py-2">
                    <h2 className="text-3xl font-medium mx-4 text-red-200">User App</h2>   
                </div>

                <div className="flex-1">

                    <ul className="flex-1 mx-6 my-4 text-red-200 text-lg mt-20">
                        <Link to="/dashboard" className="text-xl item-dashboard  font">
                             <MdOutlineSpaceDashboard  className="text-4xl mx-2 text-gray-800"/>
                              Dashboard
                        </Link>
                        <Link to="/dashboard/ListUsers" className="text-xl item-dashboard  font">
                          <FiUsers className="text-4xl mx-2 text-gray-800"/>
                            Lista de Usuarios
                        </Link>
                        <Link to="/dashboard/TasksDone" className="text-xl  item-dashboard  font">          
                            <BiTask className="text-4xl mx-2  text-gray-800"/>
                            Tarefas Concluidas
                        </Link>
                        <Link to="/dashboard/PendingTasks" className="text-xl item-dashboard font">
                          <CgMoveTask className="text-4xl mx-2 text-gray-800"/>
                            Tarefas Pendentes          
                        </Link>
                        <Link to="/dashboard/UnfinishedTasks" className="text-xl item-dashboard font">
                          <BiTaskX className="text-4xl mx-2 text-gray-800"/>
                          Tarefas Inacabadas 
                        </Link>
                    </ul>
                    
                </div>

 
               

            </div>
        
        </>
    )

}