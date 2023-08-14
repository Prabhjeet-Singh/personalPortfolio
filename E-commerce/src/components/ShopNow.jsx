import React from "react";
import ShowImg from "../svgImg/mockup.svg"
const ShopNow = () => {
  return (<div className="flex w-70 h-[70vh] px-40 justify-between items-center gap-20">
    <div className="">
        <h1 className="text-pink-500 font-bold text-[3rem] ">Online Shopping<br/> Made Easy</h1>
        <p className="w-[30rem] py-[1rem]">Discover high-quality headphones and earphones for an immersive audio experience. Shop our diverse collection for superior sound, comfort, and style. Elevate your listening journey today.</p>
        <button className="text-white bg-pink-500 w-[8rem] h-9 rounded-2xl border-2 hover:text-pink-500 hover:bg-white hover:border-pink-500">Shop Now</button>
    </div>
    <img src={ShowImg} className="w-[40rem] bg-no-repeat" alt="img" />
  </div>);
};

export default ShopNow;
