import React, { useState } from 'react'
import Nav from './navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
// database
import Card from './components/Card'
import products from './db/data'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')


  //----------------input filter----------------

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  //------Radio filter--------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
  //------Buttons filter--------

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // filtering input items
    if (query) {
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || String(newPrice) === selected || title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}

      />
    ))
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recommended handleClick={handleClick} />
      <Products result={result} />

    </div>
  )
}

export default App