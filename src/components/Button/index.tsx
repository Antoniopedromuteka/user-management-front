
 

export function Button ({children}:any){

    return(
        <>
        <button className="border p-2 rounded-lg text-xl bg-slate-800 text-white">
            {children}
        </button>
        </>
    )

}