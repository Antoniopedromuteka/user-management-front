 
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast, TypeOptions } from "react-toastify";
import { api } from "../services/api";



 

type SignInData = {
    email: string;
    password: string;
}

interface Props{
    children: ReactNode | ReactNode []
}


type Admin = {
    id: string;
    name: string;
    email: string;
     
}


type AuthContextType = {
    isAuthenticated: boolean,
    admin: Admin | null,
    sigIn: (data: SignInData) => Promise<void>

}

export const AuthContext = createContext({} as AuthContextType)


export function AuthProvider({children} : Props){
 

    const [admin, setAdmin] = useState<Admin | null>(null);
    const isAuthenticated = !!admin
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const admin = JSON.parse(localStorage.getItem("admin") || '');
            setAdmin(admin);
        }

    }, [])

    function redirect(token: string, admin: null, path: string) {

        setAdmin(admin);

        localStorage.setItem("token", token.toString());
        localStorage.setItem("admin", JSON.stringify(admin));

        window.location.href = path;
    }


    async function sigIn(data:SignInData){

            console.log(data)

           try {
                   await api.post("/admin/authenticate", data).then(response => {
                        redirect(response.data.token, response.data.admin, "/dashboard")
                    }).catch(err => toast(`${err.response.data.message}`, {
                        type: "error" as TypeOptions
                      }))

           } catch (err) {}
       
        
         
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, admin, sigIn}}>
            {children}
        </AuthContext.Provider>
    )

}