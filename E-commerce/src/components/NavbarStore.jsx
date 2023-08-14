import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav className="flex  justify-between w-screen h-10 px-10 py-2">
      <h1>Fast <span className="text-blue-400">buy</span></h1>
      <div className="flex gap-8">
      <ul className="flex gap-5">
       <Link to='/'>All Products</Link>
       <Link to='/categories'>Categories</Link>
      </ul>
      <div>
      <input type="text" className="border-black w-60 h-7 rounded-0 border-2 " placeholder="text "  />
      </div>
      </div>
      <ul className="flex gap-5">
        <Link to='/wishlist' className="text-blue-400"><FontAwesomeIcon icon={faHeart} className="pr-1" />Wishlist</Link>
        <Link to='/cart' className="text-blue-400"><FontAwesomeIcon icon={faCartShopping} className="pr-1" />Cart</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
