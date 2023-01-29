import React, { createContext } from "react";
import { useState } from "react";
import{v4 as uuidv4} from 'uuid';


export const FirstContext=createContext(); 



export default function ContextProvider ({children}) {
    //declaration des states:
    const [tache,setTache]=useState([
        {id:uuidv4(),nom:'read',done:false},
        {id:uuidv4(),nom:'sport',done:false},
        {id:uuidv4(),nom:'play',done:false}
        ])
    
        const [taches,setTaches]=useState('');

        
        const addTache=()=>{
            let ntache=[...tache];
            let nTache={};
            nTache.id=uuidv4();
            nTache.nom=taches;
            ntache.push(nTache);
            setTache(ntache);
            setTaches('');
        }
    
        const removeTache=(idp)=>{
            let nTache=tache.filter((t)=>{
                return t.id!=idp
            })
    
            setTache(nTache); 
        }
        const chager=(id)=>{
            let arr=tache.map((e)=>{
                if (e.id===id){
                    e.done=!e.done;
    
                }
                return e
            })
            setTache(arr)
        }
  return (
    <FirstContext.Provider value={{tache,setTache ,taches,setTaches ,addTache,removeTache,chager}}>
        {children}
    </FirstContext.Provider>
  )
}
