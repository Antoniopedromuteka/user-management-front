

import {useContext} from "react"
import { FormContext } from "./UseForm";









export function UseModal(){

    const {isOpenModal, setIsOpenModal} = useContext(FormContext);

     function handleCloseModal(){
        setIsOpenModal(false);
     }

  

    return{
        isOpenModal,
        setIsOpenModal,
        handleCloseModal,
    }

}