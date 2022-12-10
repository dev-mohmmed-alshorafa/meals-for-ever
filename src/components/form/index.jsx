import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import {DB} from '../../database'
import { Store } from '../../Storage';
function Home() {
  const {database,setDatabase}=useContext(Store)
  const i={
    name:'',
    selectorId:DB.Sectors.Manufacturing[0].id,
    option:DB.Sectors.Manufacturing[0].option,
    agree:false
  }
  const [form,setForm]=useState(i)
  const handelSave=(e)=>{
    e.preventDefault()
    setDatabase([{...form,id:Date.now()},...database])
    setForm(i)
    localStorage.setItem('database',JSON.stringify([{...form,id:Date.now()},...database]) );
  }
  console.log(database);
  return (
    <div className='form'>
      <h2>Please enter your name and pick the Sectors you are currently involved in.</h2>
      <form onSubmit={handelSave}>
<input required value={form.name}
 onChange={e=>setForm({...form,name:e.target.value})}
 placeholder='name'
  type="text" id='name'/>
        <select required name="" id="" onChange={e=>{
          console.log();
          setForm({...form,selectorId:e.target.value,option:e.target.options[e.target.selectedIndex].text})}} value={form.selectorId}>
          {DB.Sectors.Manufacturing.map((e)=> <option className='option' key={e.id} name={e.option} value={e.id}>{e.option}</option> )}

        </select>
<div className='agree'>
<input required type="checkbox" id="Agree" name="Agree" onChange={()=>setForm({...form,agree:!form.agree})} checked={form.agree} value={form.agree}/>

<label htmlFor="Agree">Agree to terms</label>

</div>
       <button type='submit' className='Btn'>Save</button>
      </form>
    </div>
  )
}

export default Home
