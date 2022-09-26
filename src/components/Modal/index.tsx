

 
 
import Modal from "react-modal";

import {setAppElement} from "react-modal"
import {ReactNode, useContext} from "react"
import { FormContext } from "../../context/FormContext";
 
 



setAppElement("#root");
 



interface Props{
    children: ReactNode | ReactNode [];
}


export function ModalC({children}:Props){


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

            {children}
 
      
        </Modal>
        </div>
                    

        </>
    );

}