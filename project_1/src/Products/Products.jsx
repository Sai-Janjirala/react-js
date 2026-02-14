import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  );
};

export default Products;
