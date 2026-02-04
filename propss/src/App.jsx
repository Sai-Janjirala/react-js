import React from 'react'
import Card from './components/card.jsx'
import Products from './components/Products.jsx'
import Person from './components/Person.jsx'

const App = (props) => {
  
  return (
    <div>
      <Person name='saiii' age ={19}/>
      <Products name = 'iphone' price={300000} />
      <Card> <h1>My Card</h1>
        <p>This is som content for card 1 </p>
        </Card>
    </div>
  )
}

export default App

      