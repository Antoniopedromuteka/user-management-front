import { Context, createContext, useState } from "react";


 

export function UseSide(){

    const [side, setSide] = useState<boolean>(false);

    function close(){
        setSide(false);
    }

    function open(){
        setSide(true);
    }
   
    return{
        side,
        close,
        open,
    }
}


