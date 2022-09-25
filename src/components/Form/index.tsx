import { FormEvent, useContext} from "react"
import { AiOutlineClose } from "react-icons/ai";
import { FormContext} from "../../hooks/UseForm";
import { UseModal } from "../../hooks/UseModal";
import { UseUserData } from "../../hooks/UseUsersData";
import { api } from "../../services/api";
import { Input } from "../Input";



 
 


export function Form(){

    const {typeForm, formUsers, setFormUsers, userId, setUserId, formTasks, setFormTasks} = useContext(FormContext);
    
    const {handleCloseModal} = UseModal();
   

    const {users} = UseUserData();
 


  

    async function CreateUser(e:FormEvent){

       
        e.preventDefault();

        try{
            const data = await api.post("/users/ee642a95-2962-418f-8634-51b989ce13bb",formUsers)
            .then(response => response.data)
            .catch(err => console.log(err));


            if(data){
                alert("usuario inserido com sucesso");
            } 


            setFormUsers({name: "", email:"", cargo: ""});
        }catch(err){
            console.log(err);
        }    
    }


    async function CreateTaks(e:FormEvent){

        e.preventDefault();

        try{
        const data = await api.post(`/tasks/${userId.userId}`,formTasks)
        .then(response => response.data)
        .catch(err => console.log(err));


        if(data){
            alert("tarefa definida com sucesso");
        }

        setFormTasks({name:"", tipo:"", userId:""});



    
        }catch(err){
            console.log(err);
        }    

        console.log(userId);
       
    }
    




    return(

        <>
            {typeForm === "tasks" ? (
                  <div className="flex flex-col md:w-[450px] md:h-[400px] w-[300px] h-[300px] ">

                  <header className="w-full">
                     <div className="flex items-center justify-between">
                        <h3 className="mx-6 text-xl">Adicionar Tarefa</h3> 
     
                        <AiOutlineClose className="text-3xl text-slate-400" onClick={handleCloseModal}/>
                     </div>
                  </header>
     
                  <section className="flex-1 flex mt-4">
                     <form method="post" onSubmit={CreateTaks} className="w-full mx-6 flex flex-col my-6">
     
                         <Input  label="Nome" name="name" type="text" value={formTasks.name} onChange={setFormTasks} />
                         <Input label="Tipo" name="tipo" type="text" value={formTasks.tipo} onChange={setFormTasks} />
     
                         <div className="w-full flex flex-col">
                             <label className="text-slate-500">Responsavel</label>

                          <select className="w h-12 border mt-2 bg-slate-400 rounded-sm p-2 " name="userId" onClick={(e:any) => setUserId({...userId, userId: e.target.value})}>
                             {users.map(user => (
                                    <option selected value={user.id}>{user.name.toUpperCase()}</option>   
                             ))}
                         </select>   
                         </div>
     
                         <button type="submit" className="button mt-4 h-14">Enviar</button>                
     
                     </form>
                  </section>
     
     
     
             </div>
             
            ) : (


                <div className="flex flex-col md:w-[450px] md:h-[400px] w-[300px] h-[300px] ">

                <header className="w-full">
                   <div className="flex items-center justify-between">
                      <h3 className="mx-6 text-xl">Adicionar Usuario</h3> 
   
                      <AiOutlineClose className="text-3xl text-slate-400" onClick={handleCloseModal}/>
                   </div>
                </header>
   
                <section className="flex-1 flex mt-4">
                   <form method="post" onSubmit={CreateUser} className="w-full mx-6 flex flex-col my-6">
   
                       <Input  label="Nome" name="name" type="text" value={formUsers.name} onChange={setFormUsers} />
                       <Input label="email" name="email" type="text" value={formUsers.email} onChange={setFormUsers} />
                       <Input label="cargo" name="cargo" type="text" value={formUsers.cargo} onChange={setFormUsers} />   
   
                       <button type="submit" className="button mt-4 h-14">Enviar</button>                
   
                   </form>
                </section>
   
   
   
           </div>
           



            )}
        </>

    )

}