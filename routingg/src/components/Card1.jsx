import React, { useEffect } from 'react'

export default function Card1() {

    useEffect(() =>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((response)=>response.json())
        .then((data)=>{
            
        })
    })

  return (
    <div>
      <div className="cardd">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" id='food' />
                <h1> Food API</h1>
                <h6>Explore delicious recipes & Culinary delights </h6>
            </div>
    </div>
  )
}
