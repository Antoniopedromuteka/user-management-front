
 

type InputProps ={
    label:string,
    name: string,
    type: string,
    value: string,
    onChange: Function

}

export function Input(props: InputProps){




    return(

      <>
        <label className="text-slate-500">{props.label}</label>  
        <input className="w-full h-12 px-2 rounded-sm mt-2 bg-slate-400"
        required
        name={props.name}
        value={props.value}
        onChange={(ev) => {
          props.onChange((previousState: any) => ({
            ...previousState,
            [props.name]: ev.target.value,
          }));
        }}

        type={props.type}
      />

      </>
    


    )
}