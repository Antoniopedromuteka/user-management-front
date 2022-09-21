import { MenuLeft } from "../components/MenuLeft"


import { Card } from "../components/Card"
import { Table } from "../components/Table"
import { HeaderDash } from "../components/HeaderDash"



const MookData = [

    {
        title: "usuarios",
        value : "40",
        icon : "FaBars"
    },
    {
        title: "Tarefas feitas",
        value : "40",
        icon : "FaBars"
    },
    {
        title: "Tarefas Pendentes",
        value : "40",
        icon : "FaBars"
    },
    {
        title: "Tarefas Inacabadas",
        value : "40",
        icon : "FaBars"
    },

]

export const DashBoardHome = () =>{

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
                    <Table/>

                    </div>



                </section>

                
                 
               

            </section>


        </main>

           
        </>
    )

}