import { MenuLeft } from "../components/MenuLeft"

import {FaBars} from "react-icons/fa"
import { Card } from "../components/Card"



export const DashBoardHome = () =>{

    return(
        <>

        <main className="flex  h-screen">

            
            <MenuLeft/>

            

            <section className="h-screen flex-1 md:w-[calc(100%-320px)] md:ml-[320px] text-white">
                <header className="flex-1 h-16  bg-stone-800 flex items-center fixed top-0 right-0 w-full md:w-[calc(100%-320px)] md:ml-[320px]">
                    
                    <div className="flex-1">
                        <FaBars className="text-4xl mx-4 pt-2 md:hidden"/>
                    </div>
                    <div className="flex-1 flex justify-end mx-8 items-center">

                        <img 
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQFShga4BztLBQ/profile-displayphoto-shrink_200_200/0/1663092605941?e=1669248000&v=beta&t=5wcRdEu4iIn0HfbWK9rLXLI3H3U0rvSJHxYwp0U31rs" 
                        alt="avatar" className="object-cover h-10 rounded-full  mx-4"/>

                        <p>Ola, António</p>
                         
                    </div>
                </header>


                <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-red-400">

                    <div className="flex-1 flex py-10 mx-6  flex-wrap  gap-2">

                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                    <div className="flex-1 flex md:mx-10 mx-6 overflow-x-auto relative rounded-lg">

                        <table className="flex-1 min-w-fit text-sm text-left  text-white dark:text-gray-400">
                            <thead className="text-xs text-white  bg-slate-800">
                            <th scope="col" className="py-3 px-6">
                                Nome
                            </th>
                            <th scope="col" className="py-3 px-6">
                                UserName
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Cargo
                            </th>

                            </thead>

                            <tr className="border-b bg-black dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    Pedro Muteka
                                </th>
                                <td className="py-4 px-6">
                                    El Pidro
                                </td>
                                <td className="py-4 px-6">
                                    pedromuteka2004@gmail.com
                                </td>
                                <td className="py-4 px-6">
                                    Fullstack Developer
                                </td>
                            </tr>

                            <tr className="border-b bg-black dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    Pedro Muteka
                                </th>
                                <td className="py-4 px-6">
                                    El Pidro
                                </td>
                                <td className="py-4 px-6">
                                    pedromuteka2004@gmail.com
                                </td>
                                <td className="py-4 px-6">
                                    Fullstack Developer
                                </td>
                            </tr>
                            <tr className=" border-b bg-black dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    Pedro Muteka
                                </th>
                                <td className="py-4 px-6">
                                    El Pidro
                                </td>
                                <td className="py-4 px-6">
                                    pedromuteka2004@gmail.com
                                </td>
                                <td className="py-4 px-6">
                                    Fullstack Developer
                                </td>
                            </tr>   
                        </table>
                                                
                            
                    </div>



                </section>

                
                 
               

            </section>


        </main>

           
        </>
    )

}