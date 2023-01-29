import React from 'react'
import { useContext } from 'react'
import {FirstContext} from '../Mcontext/Context'
import T from './T';
import  './style.css'

export default function Tache() {
    const {tache,setTache ,taches,setTaches ,addTache,removeTache,chager}
    =useContext(FirstContext);
  return (
    <div>
        <h1>To_Do </h1>
        <h1 id='c'>Context</h1>
        <form >
            <label id='e' >Entrer une tache</label> <input type="text" className='form-control' onChange={(e)=>(setTaches(e.target.value))} value={taches} />
            <br />
            <input type="button"  onClick={addTache} value="ajouter une tache" className='btn' id='Ajoute' />
        </form>
        <br />

            <ul>
                {
                    tache.map((t)=>{
                        return <li key={t.id}><T remove={()=>{removeTache(t.id)}} chager={chager} txt={t}></T> </li>
                    })
                }
            </ul>
    </div>
  )
}
