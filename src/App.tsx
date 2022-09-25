import React from 'react';
import { FormProvider } from './hooks/UseForm';
import { TaskProvider } from './hooks/UseTasksData';
import { UserDataProvider } from './hooks/UseUsersData';
 
import { Router } from './Router';
 
 
function App() {
  return (

    <UserDataProvider>
      <TaskProvider>
        <FormProvider>
           <Router/>
        </FormProvider>
      </TaskProvider>  
    </UserDataProvider>
  );

}

export default App;
