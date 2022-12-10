import React from 'react'
import { useContext } from 'react'
import { Store } from '../Storage'
import Meal from '../components/meal'
function Meals() {
  const {database}=useContext(Store)

  return (
    <div style={{marginTop:'60px',display:'flex',flexDirection:'column',alignItems:'center'}} >
      <h2  className='title'>Meals</h2>
     {database.length===0 && <h3 className='title'>
      Please add some meals

      </h3>}
      <div className='meals'>
      {
        database.map((meal)=> <Meal key={meal.id} meal={meal}/>)
      }
            </div>

    </div>
  )
}

export default Meals
