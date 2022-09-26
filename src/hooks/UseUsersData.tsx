 
 
import {  useEffect, useState, createContext, ReactNode, useContext} from "react";
import { TaskContext } from "../context/TaskContext";
 
import { api } from "../services/api";



export interface userDataProps{
        id: string
        name: string;
        email: string;
        cargo: string;
}

interface UserProviderProps{
    children: ReactNode;
}

export interface IUser{
    users: userDataProps[];
    usersLength: number;
    setUsers: (users: userDataProps[]) => void;
}

 


export const UserContext = createContext<IUser>({} as IUser); 


 
export const UserDataProvider = ({children}:UserProviderProps) =>{

    const [users, setUsers] = useState<userDataProps[]>([]);

    const { update} = useContext(TaskContext);

    


    useEffect(()=>{ 

        try{
        
         api.get("/users")
         .then(users => setUsers(users.data));
       
        }catch(err){
            console.log("Erro inesperado")
        }
       
   },[update])

   const usersLength = users.length;



 

    


   
    return (
        <UserContext.Provider value={{users, usersLength, setUsers}}>
                {children}
        </UserContext.Provider>
        );
};


export function UseUserData(){

    const {users, usersLength} = useContext(UserContext);

   return{
    users,
    usersLength,
   }




}
 

 


   

