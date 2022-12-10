import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {DB} from '../../database'
import { Store } from '../../Storage'
function Meal({meal}) {
  const {database,setDatabase} =useContext(Store)
  const [edit,setEdit]=React.useState(false)
  const [myMeal,setMyMeal]=useState(meal)
  console.log(meal);
  const handelEdit=()=>{
    setEdit(!edit)
    if(edit){
      meal.name=myMeal.name
      meal.selectorId=myMeal.selectorId
      localStorage.setItem('database',JSON.stringify(database) );
    }
   
  }
  const handelDelete=()=>{
    setDatabase(database.filter(e=>e.id !== meal.id))
    localStorage.setItem('database',JSON.stringify(database.filter(e=>e.id !== meal.id)) );

  }
    return (
    <div className='meal'>
      {!edit && <h3>name : {myMeal.name}</h3>}
      {!edit && <p>option : {myMeal.option}</p>}
      {edit &&  <div className='edit-meal'>
        <input placeholder='name' type="text" onChange={e=>setMyMeal({...myMeal,name:e.target.value})} value={myMeal.name} />
        <select required name="" id="" onChange={e=>setMyMeal({...myMeal,selectorId:e.target.value,option:e.target.options[e.target.selectedIndex].text})} value={myMeal.selectorId}>
        {DB.Sectors.Manufacturing.map((e)=> <option key={e.id} name={e.option} value={e.id}>{e.option}</option> )}
</select>
      </div>
      }
      <button onClick={handelEdit} className='Btn'>{!edit?'edit':'save'}</button>
      <button className='deleteBtn' onClick={handelDelete}>x</button>
    </div>
  )
}

export default Meal
