import React from 'react'

export default function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="cards1">
            <div className="cardd">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" id='food' />
                <h1> Food API</h1>
                <h6>Explore delicious recipes & Culinary delights </h6>
            </div>
            
            <div className="cardd">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" id='movie' />
                <h1>Movie API</h1>
                <h6>Find trending films & ratings</h6>
            </div>
        </div>
        <div className="cards2">
            <div className="cardd">
                <img src="https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="" />
                <h1>Products API</h1>
                <h6>Browse electronics clothing & more</h6>
            </div>
            <div className="cardd">
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww" alt="" />
                <h1>Recipe API</h1>
                <h6>Cook up new ideas with global recipes</h6>
            </div>
        </div>
      </div>
    </div>
  )
}
