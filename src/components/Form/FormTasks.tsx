





import {useContext} from "react"
import { AiOutlineClose } from "react-icons/ai";
import { UseModal } from "../../hooks/UseModal";
import { UseUserData } from "../../hooks/UseUsersData";
import { api } from "../../services/api";
 

import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ModalC } from "../Modal";
import { FormContext } from "../../context/FormContext";
import { TaskContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";

 

    interface TasksProps{
        name: string;
        tipo: string;
        userId: string;
    }
    
    interface InputProps{
        name: string;
        tipo: string;
        userId: string;
    }

  const schema = yup.object({
    name: yup.string().required("O nome é obrigatorio"),
    tipo: yup.string().required("o tipo é obrigatorio"),
    userId: yup.string().required("o responsavel é obrigatorio"),
    
  });
  

  


 
 
 


export function FormTasks(){

    const  {register, handleSubmit, formState:{errors}} = useForm<InputProps>({
        resolver: yupResolver(schema)
      });



    const {typeForm, setIsOpenModal} = useContext(FormContext);
 

    const {setUpdate, update} = useContext(TaskContext);
    
    const {handleCloseModal} = UseModal();
   

    const {users} = UseUserData();
 


  

   

     async function CreateTaks(data:TasksProps){

        console.log(data);
      
      

        
        const dataTasks = await api.post(`/tasks/${data.userId}`,data)
        .then(response => response.data)
        .catch(err => console.log(err));


        if(dataTasks){
            alert("tarefa definida com sucesso");
            setUpdate(!update)
            setIsOpenModal(!update);
        }



    }
    

    console.log(errors)
    
    

    return(

        <>
        <ModalC>
            {typeForm  && (
                  <div className="flex flex-col md:w-[450px] md:h-[400px] w-[300px] h-[300px] ">

                  <header className="w-full">
                     <div className="flex items-center justify-between">
                        <h3 className="mx-6 text-xl">Adicionar Tarefa</h3> 
     
                        <AiOutlineClose className="text-3xl text-slate-400" onClick={handleCloseModal}/>
                     </div>
                  </header>
     
                  <section className="flex-1 flex mt-4 overflow-hidden">
                     <form onSubmit={handleSubmit(CreateTaks)}  className="w-full mx-6 flex flex-col mb-2">
     
                         <label htmlFor="">
                            Nome
                            <input type="text" className="w-full  outline-none h-12 px-2 rounded-sm mt-2 bg-slate-400" {...register("name", {required:true})}/>
                            {errors.name && <span className="showErrors">{errors.name?.message as any}</span>}
                         </label>

                         <label htmlFor="">
                            Tipo
                            <input type="text" className="w-full outline-none h-12 px-2 rounded-sm mt-2 bg-slate-400" {...register("tipo", {required:true})}/>
                            {errors.tipo && <span className="showErrors">{errors.tipo?.message as any}</span>}
                         </label>
     

                        <label htmlFor="" className="flex flex-col">
                            Responsavel
                          <select {...register("userId", {required:true})} className="flex-1  outline-none h-12 border mt-2 bg-slate-400 rounded-sm p-2 ">
                             {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name.toUpperCase()}</option>   
                             ))}
                         </select>   

                                {errors.userId && <span className="showErros">{errors.userId?.message as any}</span>}

                         </label> 
                         <input type="submit" className="button cursor-pointer p-2 mt-4 mb-4 h-14" value="Enviar"/>             
     
                     </form>
                  </section>
     
     
     
             </div>
            )}

            </ModalC>
        </>

    )

}