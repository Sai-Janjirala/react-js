import React, { useEffect } from 'react'

export default function card2() {

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{

        })
    })
  return (
    <div>
      <div className="cardd">
                <img src="https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="" />
                <h1>Products API</h1>
                <h6>Browse electronics clothing & more</h6>
            </div>
    </div>
  )
}
