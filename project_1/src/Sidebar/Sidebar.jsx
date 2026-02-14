import './Sidebar.css'
import React from 'react'
import { IoCartOutline } from "react-icons/io5";

import Price from "./Price/Price"
import Colors from "./colorss/Colors"
import Category from './Category/Category';

function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1><IoCartOutline /></h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />

    </section>
  )
}

export default Sidebar