

import {MdOutlineSpaceDashboard} from "react-icons/md"

import {FiUsers} from "react-icons/fi"
import {BiTask, BiTaskX} from "react-icons/bi"
import {CgMoveTask} from "react-icons/cg"


export function MenuLeft(){

    return(
        <>

            <div className="md:flex-1 w-96 md:flex flex-col md:max-w-xs hidden md:bg-neutral-900 fixed top-0 left-0 bottom-0">
                <div className="my-4  py-2">
                    <h2 className="text-3xl font-medium mx-4 text-red-200">User App</h2>   
                </div>

                <div className="flex-1">

                    <ul className="flex-1 mx-6 my-4 text-red-200 text-lg mt-20">
                      
                      <div className="item-dashboard">
                        <MdOutlineSpaceDashboard  className="text-4xl mx-2 text-gray-800"/>
                        <li className="text-xl   font">Dashboard</li>
                      </div>

                       <div className="item-dashboard">
                        <FiUsers className="text-4xl mx-2 text-gray-800"/>
                        <li className="text-xl   font">Lista de Usuarios</li>
                       </div>
                       
                      <div className="item-dashboard">
                        <BiTask className="text-4xl mx-2  text-gray-800"/>
                        <li className="text-xl   font">Tarefas Concluidas</li>
                      </div>

                      <div className="item-dashboard">
                        <CgMoveTask className="text-4xl mx-2 text-gray-800"/>
                        <li className="text-xl    font">Tarefas Pendentes</li>
                      </div>

                      <div className="item-dashboard">
                        <BiTaskX className="text-4xl mx-2 text-gray-800"/>
                        <li className="text-xl    font">Tarefas Inacabadas</li>
                      </div>
                       
                      
                    </ul>
                    
                </div>

 
               

            </div>
        
        </>
    )

}