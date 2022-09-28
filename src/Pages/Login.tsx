import { useContext, useState } from "react"
import { SignIn } from "../components/FormSignIn";
import { SignUp } from "../components/FormSignUp";
import { FormContext } from "../context/FormContext";

 

export function Login(){

    const {loggin} = useContext(FormContext);

    return(
        <>
            <main className="w-full h-screen flex md:items-center   justify-center bg-slate-800">

               
               {loggin ? (<SignIn/>) : (<SignUp/>)}
                

 

            </main>
        </>
    )


}