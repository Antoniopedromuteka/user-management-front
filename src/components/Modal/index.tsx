

 
 
import Modal from "react-modal";

import {setAppElement} from "react-modal"
import {useContext} from "react"
import { Form } from "../Form";
import { FormContext } from "../../hooks/UseForm";
 



setAppElement("#root");
 




export function ModalC(){


     const {isOpenModal, setIsOpenModal} = useContext(FormContext);

   


    
    const customStyles = {
        content:{
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        }
    }
 
    function handleCloseModal(){
        setIsOpenModal(false);
    }

    return(
        <>

        

        <div className="w-full h-full flex items-center justify-center">
     

          <Modal
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
            style= {customStyles}   
          >
            <Form/>
      
        </Modal>
        </div>
                    

        </>
    );

}