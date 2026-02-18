import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    
    copyTask.push({title, details})
    setTask(copyTask)
  
    setTitle('')
    setDetails('')

  };
  
  

  return (
    <div className="h-screen bg-black text-white h-full ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start p-10 flex-col justify-between gap-4 outline-none "
      >
        {/* Pehla input for heading */}
          <input
            type="text"
            placeholder="Enter notes heading"
            className="p-3 outline-none px-5 py-2 border-2 rounded font-medium "
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          {/* Detailed wala input */}
          <textarea
            name=""
            id=""
            placeholder="write  details here"
            className="p-3 outline-none px-5 py-2 border-2 h-32 w-56 flex items-start felx-row rounded"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button className="bg-white text-black px-5 px-2 rounded font-medium">
            Add notes
          </button>
        
      </form>
      <div className="flex lg:w-1/2 gap-5  flex-wrap p-10 h-full overflow-auto">
      <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5">
          
        {task.map(function(elem,idx){


          return <div key={idx} className="h-52 w-40 text-black p-4 rounded-3xl bg-white">
            <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
            <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
          </div>
        })}

        </div>
      </div>
    </div>
  );
}

export default App;
