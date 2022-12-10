import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/nav'
import Storage from './Storage'


function App() {
  return <div className="App">
    <Storage>
     <Nav/>
    <Outlet />
    </Storage>
  </div>
}

export default App
