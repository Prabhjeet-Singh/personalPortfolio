import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <>
    <nav className="flex  justify-between w-screen h-18 px-16 py-4">
      <h1 className="text-2xl font-bold">Fast <span className="text-pink-400">buy</span></h1>
      <div className="flex gap-8">
      <ul className="flex gap-5">
       <Link to='/' className="font-semibold">All Products</Link>
       <Link to='/categories' className="font-semibold">Categories</Link>
      </ul>
      <div>
      <input type="text" className="border-black w-60 h-7 rounded-0 border-2 " placeholder="text "  />
      </div>
      </div>
      <ul className="flex gap-5">
        <Link to='/wishlist' className="text-pink-400 font-semibold"><FontAwesomeIcon icon={faHeart} className="pr-1" />Wishlist</Link>
        <Link to='/cart' className="text-pink-400 font-semibold "><FontAwesomeIcon icon={faCartShopping} className="pr-1" />Cart</Link>
      </ul>
    </nav>
    <div className="border-t border-gray-500  mx-4"/>
      
    </>
  );
};

export default Navbar;
