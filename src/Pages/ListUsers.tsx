import { Card } from "../components/Card";
import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import { Table } from "../components/Table";





export function ListUsers(){

    return(
        <>
        
        <main className="flex  h-screen">

        <MenuLeft/>


        <section className="h-screen flex-1 md:w-[calc(100%-320px)] md:ml-[320px] text-white">

       
        <HeaderDash/>

           <section className="flex-1 h-[calc(100vh-4rem)] mt-[4rem] text-slate-900">

                

                <div className="flex-1 pt-16">

                <div className="flex flex-1   text-2xl mb-8">

                    <div className="flex-1 md:mx-10 mx-2 flex justify-between items-center">

                        <h2>Lista de usuários</h2>

                        <button className="border p-2 rounded-lg text-xl bg-slate-800 text-white">
                            Adicionar
                        </button>


                    </div>



                </div>
                <Table/>

             </div>






            </section>



        </section>


        </main>
        
        </>
    )

}