import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards'
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <>
     <div className="main">
       <Nav/>
       <Cards/>
       <BrowserRouter>
       <Routes>
        <Route path='./' ></Route>
       </Routes>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
