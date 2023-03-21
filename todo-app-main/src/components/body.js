import React from "react";

const Body = () => {
  return <div className="min-w-[40vw] min-h-[30vh] bg-red-300  z-10 flex flex-col justify-between ">
    <span className="self-center">list</span>
    <div className="grid grid-cols-3">
      <span>items left</span>
      <div className="grid gap-2 grid-cols-3">
        <button className="">All</button>
        <button className="">Active</button>
        <button className="">Completed</button>
       
      </div>
      <button  className="capitalize">clear Completed</button>
    </div>
    </div>;
};

export default Body;
