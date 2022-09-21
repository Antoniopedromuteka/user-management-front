

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardHome } from "./Pages/DashboardHome";
import { ListUsers } from "./Pages/ListUsers";
import { Login } from "./Pages/Login";



export function Router(){


    return(
        <>
        
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login/>} exact/>
                <Route path="/Dashboard" element={<DashBoardHome/>}/>
                <Route path="/Dashboard/ListUsers" element={<ListUsers/>}/>
            
            </Routes>
        
        </BrowserRouter>

        
        </>

    );



}