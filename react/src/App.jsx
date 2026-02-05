import { useState } from 'react'

import Nav from './components/Nav.jsx'
import Gallery from './components/Gallery.jsx'
import './App.css'
import Cardholder from './components/Cardholder.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Child1 from './components/Child1.jsx'

function App() {
  var[count,setCount]=useState(0);
  var[name,setName]=useState("banana");

    function handleClick(){
      setCount(count+1);
      setName("button clicked")
    }

  return (
    
    <>
    
      <div className='main'>
   <Nav/>
   <Child1/>
   <BrowserRouter>
   <Routes>
    <Route path='/gallery' element={<Gallery />}></Route>
    <Route path='/card' element={<Cardholder/>}></Route>
    <Route path='/' element={[<Gallery/>,<Cardholder/>]} />
   </Routes>
   </BrowserRouter>
  
   <p>count:{count}   </p>
<button type='button' onClick = {handleClick}>ClickMe</button>
<Cardholder/>
   </div>
    </>
    
  )
}

export default App

{/* <Cardholder img="https://plus.unsplash.com/premium_photo-1713110641401-cc9ad163b7d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNhbXVyYWl8ZW58MHx8MHx8fDA%3D" title="red samurai" desc="he is a reed samurai" />
   < Gallery/>
      <Cardholder img ="https://plus.unsplash.com/premium_photo-1713110640734-8aa573bcd7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FtdXJhaXxlbnwwfHwwfHx8MA%3D%3D" title="Samurai" desc="Samurais were the warrior class of feudal Japan, known for their discipline, loyalty, and strict code of hono.
" /> */}