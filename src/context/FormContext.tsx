import { createContext, ReactNode, useState } from "react";


 interface FormUsersProps{
    name: string;
    email: string;
    cargo: string;
}


 interface FormTasksProps{
    name: string;
    tipo: string;
    userId: string;
}

interface userIdProps{
    userId : string;

}

export enum optionForm{
    formUsers = "formUsers",
    formTasks = "formTasks",
}


type IForm = {
    formUsers : FormUsersProps,
    formTasks : FormTasksProps,
    userId : userIdProps,  
    isOpenModal : boolean,
    loggin: boolean,
    typeForm: boolean,
    setIsOpenModal : (newState: boolean) => void; 
    setFormUsers: (newState:FormUsersProps) => void;
    setFormTasks: (newState:FormTasksProps) => void;
    setTypeForm: (newState:boolean) => void;
    setLoggin: (newState:boolean) => void
    setUserId: (newState:userIdProps) => void;
}


interface Props{

    children : ReactNode | ReactNode[]
}



export const FormContext = createContext<IForm>({} as IForm);


export function FormProvider({children}: Props){

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [typeForm, setTypeForm] = useState<boolean>(false);
    const [loggin, setLoggin] = useState(false);
    

    const [formUsers, setFormUsers] = useState<FormUsersProps>({
        name: "",
        email: "",
        cargo: "",
    });

    const [formTasks, setFormTasks] = useState<FormTasksProps>({
        name: "",
        tipo: "",
        userId: ""
    })

    const [userId, setUserId] = useState<userIdProps>({
        userId: ""
    });


    return(
        <FormContext.Provider value={{formUsers, loggin,setLoggin, setFormUsers, formTasks, setFormTasks, userId, setUserId, isOpenModal,setIsOpenModal, typeForm, setTypeForm}}>
            {children}
        </FormContext.Provider>
    )


}