import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Footer = () => {
  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  }
  return (<footer className="min-h-[15rem] w-full  my-5">
    <h4 className="h-[4rem]  bg-pink-200 flex items-center justify-center font-2xl text-[2rem] cursor-pointer mb-3" onClick={scrollToTop}>Back to Top</h4>
    <div className="flex  justify-center w-full sm:gap-3 md:gap-20 lg:gap-28 m-2">
      <div className="flex flex-col gap-2 ">
        <h5 className="font-bold font-[4rem] ">Get to know Us</h5>
        <Link to="/" onClick={scrollToTop} className="underlines">Careers</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Blog</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">About Fast Buy</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Investor Relations</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Fast Buy Relations</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Fast But Science</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="font-bold font-[4rem] ">Make Money with Us</h5>
        <Link to="/" onClick={scrollToTop} className="underlines">Sell products on FastBuy</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Sell on FastBuy Business</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Sell apps on FastBuy</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Become an Affiliate</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Advertise Your Products</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Advertise Your Products</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="font-bold font-[4rem] ">FastBuy Payment Products</h5>
        <Link to="/" onClick={scrollToTop} className="underlines">FastBuy Business Card</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Shop with Points</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Reload Your Balance</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Reload your Balance</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">FastBuy Currency Converter</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Self-Publish with Us</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="font-bold font-[4rem] ">Let Us Help You</h5>
        <Link to="/" onClick={scrollToTop} className="underlines">FastBuy and COVID-19</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Your Account</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Your Orders</Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Shipping Rates </Link>
        <Link to="/" onClick={scrollToTop} className="underlines">Manage Your Content </Link>
        <Link to="/" onClick={scrollToTop} className="underlines">FastBuy Assistent</Link>
      </div>
    </div>
  </footer>);
};

export default Footer;
