import {useContext} from "react"
import { AiOutlineClose } from "react-icons/ai";
import { UseModal } from "../../hooks/UseModal";
import { api } from "../../services/api";
 

import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ModalC } from "../Modal";
import { FormContext } from "../../context/FormContext";
import { TaskContext } from "../../context/TaskContext";



    interface UserProps{
        name: string;
        email: string;
        cargo: string;
    }    

    
    
    interface InputProps{
        name: string;
        email: string;
        cargo: string;
    }

  const schema = yup.object({
    name: yup.string().required("O nome é obrigatorio"),
    email: yup.string().email("digite um email válido").required("O nome é obrigatorio"),
    cargo: yup.string().required("o cargo é obrigatorio"),
    
  });
  

  


 
 
 


export function FormUsers(){

    const  {register, handleSubmit, formState:{errors}} = useForm<InputProps>({
        resolver: yupResolver(schema)
      });

      


    const {typeForm, setFormUsers, setIsOpenModal} = useContext(FormContext);
    
    const {handleCloseModal} = UseModal();

    const {setUpdate, update} = useContext(TaskContext);

   

   


  

    async function CreateUser(data:UserProps){

        console.log(data);
     
    
            const dataUsers = await api.post("/users/ee642a95-2962-418f-8634-51b989ce13bb",data)
            .then(response => response.data)
            .catch(err => console.log(err));


            if(dataUsers){
                alert("usuario inserido com sucesso");
                // window.location.replace("/dashboard/listUsers"); 
                setUpdate(!update)
                setIsOpenModal(false);                
            } 


            setFormUsers({name: "", email:"", cargo: ""});
    
    }


     
    

    console.log(errors)
    
    

    return(

        <>
        <ModalC>
            {!typeForm  && (
                 
                <div className="flex flex-col md:w-[450px] md:h-[400px] w-[300px] h-[300px] ">

                <header className="w-full">
                   <div className="flex items-center justify-between">
                      <h3 className="mx-6 text-xl">Adicionar Usuario</h3> 
   
                      <AiOutlineClose className="text-3xl text-slate-400" onClick={handleCloseModal}/>
                   </div>
                </header>
   
                <section className="flex-1 flex mt-4 overflow-hidden">
                   <form onSubmit={handleSubmit(CreateUser)} className="w-full mx-6 flex flex-col my-6">

                        <label htmlFor="">
                            Nome
                            <input type="text" className="w-full  outline-none h-12 px-2 rounded-sm mt-2 bg-slate-400" {...register("name", {required:true})}/>
                            {errors.name && <span className="showErrors">{errors.name?.message }</span>}
                         </label>

                         <label htmlFor="">
                            Email
                            <input type="text" className="w-full outline-none h-12 px-2 rounded-sm mt-2 bg-slate-400" {...register("email", {required:true})}/>
                            {errors.email && <span className="showErrors">{errors.email?.message }</span>}
                         </label>

                         <label htmlFor="">
                            Cargo
                            <input type="text" className="w-full  outline-none h-12 px-2 rounded-sm mt-2 bg-slate-400" {...register("cargo", {required:true})}/>
                            {errors.cargo && <span className="showErrors">{errors.cargo?.message }</span>}
                         </label>

                         <button type='submit' className="button cursor-pointer p-2 mt-4 mb-4 h-14">Enviar</button> 
                   </form>
                </section>
   
   
           </div>
        
            )}

            </ModalC>
        </>

    )

}