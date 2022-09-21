

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardHome } from "./Pages/DashboardHome";
import { ListUsers } from "./Pages/ListUsers";
import { Login } from "./Pages/Login";
import { PendingTasks } from "./Pages/PendingTasks";
import { TasksDone } from "./Pages/TasksDone";
import { UnfinishedTasks } from "./Pages/UnfinishedTasks";



export function Router(){


    return(
        <>
        
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login/>} exact/>
                <Route path="/Dashboard" element={<DashBoardHome/>}/>
                <Route path="/Dashboard/ListUsers" element={<ListUsers/>}/>
                <Route path="/Dashboard/TasksDone" element={<TasksDone/>}/>
                <Route path="/Dashboard/PendingTasks" element={<PendingTasks/>}/>
                <Route path="/Dashboard/UnfinishedTasks" element={<UnfinishedTasks/>}/>


            
            </Routes>
        
        </BrowserRouter>

        
        </>

    );



}