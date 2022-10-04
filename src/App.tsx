import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { FormProvider } from './context/FormContext';
import { TaskProvider } from './context/TaskContext';

import { UserDataProvider } from './hooks/UseUsersData';
 
import { Router } from './Router';
 
 
function App() {
  return (
    <>
    <AuthProvider>
     <TaskProvider>
      <UserDataProvider>
        <FormProvider>
           <Router/>
        </FormProvider> 
       </UserDataProvider>
    </TaskProvider> 
    </AuthProvider>
    </>
  );

}

export default App;
