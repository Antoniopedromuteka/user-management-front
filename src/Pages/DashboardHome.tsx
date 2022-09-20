import { MenuLeft } from "../components/MenuLeft"

import {FaBars} from "react-icons/fa"



export const DashBoardHome = () =>{

    return(
        <>

        <main className="flex w-screen h-screen">

            
            <MenuLeft/>

            

            <section className="h-screen bg-white flex-1 text-white">

                <div>
                    <FaBars className="text-4xl mx-4 mt-2 md:hidden"/>
                </div>

            </section>


        </main>

           
        </>
    )

}