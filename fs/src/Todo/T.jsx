import React from 'react'

export default function T(props) {
  return (
    <div>
      <input type="text" id='t' className={props.txt.done ?  'text':'' }  readOnly value={props.txt.nom} style={{fontWeight:'bolder'}} />
      <input type="button" onClick={props.remove}  value="suprimer" className='btn ' style={{backgroundColor:'rgba(240, 170, 91, 0.875)'}} />
      <input type="button" onClick={()=>props.chager(props.txt.id) } value="done" className='btn ' style={{backgroundColor:'rgb(216, 235, 44'} } />
    
    </div>
  )
}
