import React, { useEffect } from 'react'

const BasicEffect = () => {

  useEffect(()=>{
    console.log('basic');
    
  },[])

  return (
    <div>
      <h1>CHeck the console to see the magic</h1>
    </div>
  )
}

export default BasicEffect
