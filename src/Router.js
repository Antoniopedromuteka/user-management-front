

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardHome } from "./Pages/DashboardHome";
import { ListUsers } from "./Pages/ListUsers";
import { Login } from "./Pages/Login";
import { Tasks } from "./Pages/Tasks";
import {DeletedTasks } from "./Pages/DeletedTasks";
import { TasksDone } from "./Pages/TasksDone";



export function Router(){


    return(
        <>
        
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login/>} exact/>
                <Route path="/Dashboard" element={<DashBoardHome/>}/>
                <Route path="/Dashboard/ListUsers" element={<ListUsers/>}/>
                <Route path="/Dashboard/Tasks" element={<Tasks/>}/>
                <Route path="/Dashboard/DeletedTasks" element={<DeletedTasks/>}/>   
                <Route path="/Dashboard/TasksDone" element={<TasksDone/>}/>            
            </Routes>
        
        </BrowserRouter>

        
        </>

    );



}