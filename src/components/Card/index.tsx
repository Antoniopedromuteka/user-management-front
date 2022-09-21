

import {HiUsers} from "react-icons/hi"



export function Card(){


    return(
        <>
        
        <div className="flex flex-1  items-center px-3 justify-between max-w-[600px]  h-24 rounded-md border-2 ">

            <div className="text-lg">
                <p>45</p>

                <p>Usúarios</p>
            </div>


            <div className="py-4 bg-black px-4 rounded-md">


                <HiUsers className="text-3xl"/>


            </div>



        </div>
        
        </>
    );

}