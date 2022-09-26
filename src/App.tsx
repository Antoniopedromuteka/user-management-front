import React from 'react';
import { FormProvider } from './context/FormContext';
import { TaskProvider } from './context/TaskContext';

import { UserDataProvider } from './hooks/UseUsersData';
 
import { Router } from './Router';
 
 
function App() {
  return (
    <>
     <TaskProvider>
      <UserDataProvider>
        <FormProvider>
           <Router/>
        </FormProvider> 
       </UserDataProvider>
    </TaskProvider> 
    </>
  );

}

export default App;
