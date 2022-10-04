import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup"
import { UseForm } from "../../hooks/UseForm";

import { ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



interface adminProps{
    email: string;
    password: string;
}


const schema = yup.object({
    
    email: yup.string().email("digite um email válido").required("O email é obrigatorio"),
    password: yup.string()
    .required('Nenhuma senha fornecida') 
    .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres')
  });




export function SignIn(){

    const  {register, handleSubmit, formState:{errors}} = useForm<adminProps>({
        resolver: yupResolver(schema)
      });

      const {sigIn} = useContext(AuthContext)

      const {handleSetSignUp} = UseForm();



      async function handleSignIn(data:adminProps){
        try{
          await sigIn(data);
        }catch(err){
          console.log(err);
        }
      }
      

    return(
      <>
        <div className="flex-1 max-w-[400px] mt-24 md:mt-0 bg-zinc-800 mx-4 h-[400px] rounded-lg shadow-2xl">

        <h2 className="text-center mt-6  text-sky-300  text-3xl">Login</h2>
       

        <form onSubmit={handleSubmit(handleSignIn)} className="relative flex-1 flex flex-col h-[300px] mt-10 mx-4">

            <input type="text" className="p-3 mb-4 rounded-md outline-none" placeholder="Digite o seu email" {...register("email", {required: true})}/>
            {errors.email && <span className="showErrors mb-2">{errors.email?.message }</span>}

            <input type="text" className="p-3 mb-4 rounded-md outline-none" placeholder="Digite a sua password" {...register("password", {required: true})} />
            {errors.password && <span className="showErrors mb-2">{errors.password?.message }</span>}

            <button type="submit" className="bg-slate-600 hover:bg-slate-800 p-3 text-white rounded-md text-2xl">Entrar</button>

            <span className="absolute top-[260px] mr-2  cursor-pointer text-sm text-sky-200 self-end hover:text-slate-400 " onClick={handleSetSignUp}>Cadastar-se</span>
        </form>

    </div>
    <ToastContainer position="top-center"/>
    </>
    )

}