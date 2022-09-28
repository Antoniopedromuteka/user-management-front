import { useContext} from "react";
import { FormContext } from "../context/FormContext";
 


export const UseForm = () =>{

    const {typeForm, setTypeForm, setLoggin} = useContext(FormContext);

    function handleSetSignIn(){
        setLoggin(true);
    }

    function handleSetSignUp(){
        setLoggin(false);
    }
    

    return{
        handleSetSignIn,
        handleSetSignUp,
        typeForm,
        setTypeForm
    }

} 
 