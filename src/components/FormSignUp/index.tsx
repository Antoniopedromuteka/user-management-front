
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup"
import { UseForm } from "../../hooks/UseForm";

import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


interface adminProps{
    name:string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const schema = yup.object({
    name: yup.string().required("o nome é obrigatorio"),
    email: yup.string().email("digite um email válido").required("O email é obrigatorio"),
    password: yup.string()
    .required('Nenhuma senha fornecida') 
    .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres'),
    passwordConfirm: yup.string().required("Nenhuma senha fornecida").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  }).required();
 






export function SignUp(){

    const  {register, handleSubmit, formState:{errors}} = useForm<adminProps>({
        resolver: yupResolver(schema)
      });

      const {handleSetSignIn} = UseForm();

      function signUp(){

        toast("Usuario cadastrado com sucesso", {
            type: "success" as TypeOptions
          })

      }



    return(
    <>
        <div className="flex-1 max-w-[400px] mt-24 md:mt-0 bg-zinc-800 mx-4 h-[500px] rounded-lg shadow-2xl">

        <h2 className="text-center mt-6  text-sky-300  text-3xl">Cadastre-se</h2>
       

        <form onSubmit={handleSubmit(signUp)} className="relative flex-1 flex flex-col h-[400px] mt-10 mx-4">
        <input type="text" className="p-3 mb-4 rounded-md outline-none" placeholder="Digite o seu nome" {...register("name", {required:true})}/>
           {errors.name && <span className="showErrors mb-2">{errors.name?.message }</span>}
           <input type="text" className="p-3 mb-4 rounded-md outline-none" placeholder="Digite o seu email" {...register("email", {required:true})}/>
           {errors.email && <span className="showErrors mb-2">{errors.email?.message }</span>}
            <input type="password" className="p-3 mb-4 rounded-md outline-none" placeholder="Digite a sua password" {...register("password", {required:true})}/>
            {errors.password && <span className="showErrors mb-2">{errors.password?.message }</span>}
            <input type="password" className="p-3 mb-4 rounded-md outline-none" placeholder="Confirme a sua password" {...register("passwordConfirm", {required:true})}/>
            {errors.passwordConfirm && <span className="showErrors mb-2">{errors.passwordConfirm?.message }</span>}

            <button type="submit" className="bg-slate-600 hover:bg-slate-800 p-3 text-white rounded-md text-xl">Cadastrar-se</button>

            <span className="absolute top-[350px] mr-2  cursor-pointer text-sm text-sky-200 self-end hover:text-slate-400" onClick={handleSetSignIn}>Já possui uma conta? Login</span>
        </form>

    </div>
        <ToastContainer position="top-right"/>
    </>

    )
}