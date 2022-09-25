 
 
import { useContext } from "react";
import { HeaderDash } from "../components/HeaderDash";
import { MenuLeft } from "../components/MenuLeft";
import { ModalC } from "../components/Modal";
import { FormContext} from "../hooks/UseForm";
 
import {UseUserData} from "../hooks/UseUsersData";

 

 
export function ListUsers(){

    const {users} = UseUserData();

    const {isOpenModal, setIsOpenModal, setTypeForm} = useContext(FormContext);
  


    function handleModal(){
        setTypeForm("users");
        setIsOpenModal(true)
    }

   

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

                        <button onClick={handleModal} className="border p-2 rounded-lg text-xl bg-slate-800 text-white">
                            Adicionar
                        </button>


                    </div>



                </div>
                        {users.length ? (
                            
                            <div className="flex-1 flex md:mx-10 mx-6 overflow-auto sm:overflow-auto   rounded-lg">

        

                            <table className="w-full relative  text-sm text-left  text-white dark:text-gray-400 ">
                
                            <thead className="text-xs text-white  bg-slate-800">
                            <th scope="col" className="py-3 px-6">
                                Nome
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Cargo
                            </th>
                
                            </thead>
                            <tbody>
                
                            {users && users.map((users) => (
                                
                                <tr key={users.email} className="border-b bg-black dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{users.name.toUpperCase()}</td>
                                </th>
                                    
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{users.email}</td>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                                    <td>{users.cargo.toUpperCase()}</td>
                                </th>
                                </tr> 
                            ))} 
                    
                            </tbody>
                            </table> 
                    </div>




                    ):(
                        <h2 className="mx-8 text-2xl">Sem Usuarios Cadastrados</h2>
                    )}
             
          
          
             </div>






            </section>



        </section>



        </main>
        {isOpenModal && <ModalC/>}
        </>
    )

}