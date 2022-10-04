

import {HiUsers} from "react-icons/hi"
import {BiTask} from "react-icons/bi"


interface CardProps{

    title: string;
    value: number;
    icon: string;

}


export function Card(props:CardProps){


    return(
        <>
        
        <div className="flex flex-1   items-center px-3 justify-between w-[400px] max-w-[600px]  h-24 rounded-md border-2 ">

            <div className="text-lg">
                <p>{props.title}</p>

                <p>{props.value}</p>
            </div>


            <div className="py-4 bg-black px-4 rounded-md">


                {props.icon === "HiUsers" && <HiUsers className="text-3xl bg-red-600"/>}
                {props.icon === "BiTask" && <BiTask className="text-3xl bg-red-600"/>}


            </div>



        </div>
        
        </>
    );

}