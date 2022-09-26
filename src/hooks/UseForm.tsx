import { useContext} from "react";
import { FormContext } from "../context/FormContext";
 


export const UseForm = () =>{

    const {typeForm, setTypeForm} = useContext(FormContext);

    

    return{

        typeForm,
        setTypeForm
    }

} 
 