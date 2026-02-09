import React from 'react'
import { useState } from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'

const App = () => {
  

  return (
    <div>  
        <Counter />
        <TodoList />
        <Profile />
    </div>
  )
}

export default App
