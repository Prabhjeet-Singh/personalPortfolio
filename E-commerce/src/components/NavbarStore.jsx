import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center w-screen h-5">
      <h1>Fast <span>buy</span></h1>
      <ul>
       <Link to='/'>All Products</Link>
       <Link to='/categories'>Categories</Link>
      </ul>
      <input type="text" />
      <ul>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to='/cart'>Cart</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
