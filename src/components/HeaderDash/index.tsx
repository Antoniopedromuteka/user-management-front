
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { ModalHeader } from "../ModalHeader";
 





export function HeaderDash(){

    const [showModal, setShowModal] = useState<boolean>(false);
    const {admin} = useContext(AuthContext)

    return(
        <>
             <header className="flex-1 h-16 text-white z-50  bg-stone-800 flex items-center fixed top-0 right-0 w-full md:w-[calc(100%-320px)] md:ml-[320px]">
                    
                    <div className="flex-1">
                        <FaBars className="text-4xl mx-4 pt-2 md:hidden"/>
                    </div>
                    <div onClick={()=> setShowModal(!showModal)} className="flex-1 flex justify-end mx-8 items-center cursor-pointer">

                        <img 
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQFShga4BztLBQ/profile-displayphoto-shrink_200_200/0/1663092605941?e=1669248000&v=beta&t=5wcRdEu4iIn0HfbWK9rLXLI3H3U0rvSJHxYwp0U31rs" 
                        alt="avatar" className="object-cover h-10 rounded-full  mx-4"/>

                        <p>Ola, {admin?.name}</p>      
                    </div>
                </header>
                {showModal && <ModalHeader/>}
        </>
    );



}