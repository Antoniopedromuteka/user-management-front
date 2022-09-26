

import {useContext} from "react"
import { FormContext } from "../context/FormContext";
 









export function UseModal(){

    const {isOpenModal, setIsOpenModal,setTypeForm} = useContext(FormContext);

     function handleCloseModal(){
        setIsOpenModal(false);
     }

     function handleOpenModal(){
      
        setIsOpenModal(true)
         
    }

     function setTypeUser(){

        setTypeForm(false)

     }

     function setTypeTask(){
        setTypeForm(true);
     }
  

    return{
        isOpenModal,
        setIsOpenModal,
        handleCloseModal,
        handleOpenModal,
        setTypeTask,
        setTypeUser
    }

}