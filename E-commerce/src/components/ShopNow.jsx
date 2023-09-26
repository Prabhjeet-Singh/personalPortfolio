import React from "react";
import ShowImg from "../svgImg/mockup.svg"
const ShopNow = () => {
  return (<div className="flex w-70 lg:h-[70vh] pl-4 lg:flex-row mdwide:pl-20 px-10 pt-10 wide:gap-20 lg:pr-40 wide:pl-30 justify-between items-center  overflow-x-hidden">
    <div className="">
        <h1 className="text-pink-500 font-bold mdwide:text-[3rem] text-[2rem] ">Online Shopping<br/> Made Easy</h1>
        <p className="mdwide:w-[30rem]  py-[1rem] mdwide:text-[1.5rem] text-[1rem]">Discover high-quality headphones and earphones for an immersive audio experience. Shop our diverse collection for superior sound, comfort, and style. Elevate your listening journey today.</p>
        <button className=" w-[8rem] h-9 btnClass">Shop Now</button>
    </div>
    <img src={ShowImg} className="w-[20rem] mdwide:w-[30rem]  wide:w-[40rem] bg-no-repeat" alt="img" />
  </div>);
};

export default ShopNow;
