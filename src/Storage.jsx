import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Store=createContext(0)
function Storage(props) {
const [database,setDatabase]=useState([])

useEffect(()=>{
  const meals=JSON.parse(localStorage.getItem('database')
  )
  if(meals){
    setDatabase(JSON.parse(localStorage.getItem('database')
    ))
  }

},[])



  return (
    <div>
      <Store.Provider value={{database,setDatabase}}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage
