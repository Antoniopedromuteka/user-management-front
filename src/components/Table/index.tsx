


export function Table(){


    return(

        <div className="flex-1 flex md:mx-10 mx-6 overflow-auto  rounded-lg">

        <table className="w-full relative  text-sm text-left  text-white dark:text-gray-400 ">
            <thead className="text-xs text-white  bg-slate-800">
            <th scope="col" className="py-3 px-6">
                Nome
            </th>
            <th scope="col" className="py-3 px-6">
                UserName
            </th>
            <th scope="col" className="py-3 px-6">
                Email
            </th>
            <th scope="col" className="py-3 px-6">
                Cargo
            </th>

            </thead>

            <tr className="border-b bg-black dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                    Pedro Muteka
                </th>
                <td className="py-4 px-6">
                    El Pidro
                </td>
                <td className="py-4 px-6">
                    pedromuteka2004@gmail.com
                </td>
                <td className="py-4 px-6">
                    Fullstack Developer
                </td>
            </tr>

            <tr className="border-b bg-black dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                    Pedro Muteka
                </th>
                <td className="py-4 px-6">
                    El Pidro
                </td>
                <td className="py-4 px-6">
                    pedromuteka2004@gmail.com
                </td>
                <td className="py-4 px-6">
                    Fullstack Developer
                </td>
            </tr>
            <tr className=" border-b bg-black dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-red-200 whitespace-nowrap dark:text-white">
                    Pedro Muteka
                </th>
                <td className="py-4 px-6">
                    El Pidro
                </td>
                <td className="py-4 px-6">
                    pedromuteka2004@gmail.com
                </td>
                <td className="py-4 px-6">
                    Fullstack Developer
                </td>
            </tr>   
        </table>
                                
            
    </div>

    );


}