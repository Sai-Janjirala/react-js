import React, { useEffect } from 'react'
import {useState} from 'react'


export default function Cardholder(props) {
 var [count, setCount] = useState(0);
 var [name,setName] = useState("YOYO")
  var obj;
  useEffect(()=>{
    fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=5decdcb63ea74ce0a856ab52827832fb&includeNutrition=true")
    .then((res)=>res.json())
    .then((data)=>{
      obj=data;
      console.log(obj.title);
      
    })
  },[]);

 function handleCheck(){
  setCount(++count);
  setName("button is clicked")
 }
  return (
    <div className="content">
        <div className="card">
            <div className="image-container">
                <img src={props.img} alt="" />
            </div>
            <p>name: {name}  count: {count}</p>
            <p className="title">{props.title}</p>
            <p className="desc"> {props.desc}</p>
            <button className="btn" onClick={handleCheck} >Read More</button>
        </div>
    </div>
  )
}




