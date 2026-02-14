import "./Nav.css";
import React from "react";
import { CiHeart } from "react-icons/ci";
import {AiOutlineUserAdd } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";


function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your Search Shoes"
          className="Search-input"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <CiHeart className="nav-icons" />
        </a>
        <a href="#">
          <FaCartShopping  className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
