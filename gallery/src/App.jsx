import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const  getData =async ()=> {
  const response  = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
  setUserData(response.data);
  
  }

  useEffect(function(){
    getData()
  },[index])
  
  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loadinggg....</h3>

  if(userData.length >0){
    printUserData = userData.map(function (elem,idx){
      return <a href={elem.url} target='_blank'>
        <div key={idx}>
        <div className='h-40 w-44 overflow-hidden bh-white rounded-xl'>
        <img className='h-full w-full object-cover ' src={elem.download_url}  />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
      </a>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>


        <div className='flex flex-wrap h-[83%] gap-4' >
          {printUserData}
        </div>
        <div className='flex justify-center items-center p-4 gap-5'>
          <button className='bg-amber-400 text-black rounded px-4 py-2 active:scle-95' 
          onClick={()=>{
            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          >Previous</button>

          <h4> page {index}</h4>
          <button className='bg-amber-400 text-black rounded px-4 py-2 active:scle-95'
          onClick={()=>{
            setIndex(index+1)
            setUserData([])
          }}
          > Next</button>
        </div>
    </div>
  )
}

export default App
