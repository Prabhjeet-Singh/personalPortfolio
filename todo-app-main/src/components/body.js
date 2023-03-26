import React from "react";

const Body = ({lightMode,list}) => {
  return <div className={"md:max-w-[35rem] min-h-[30vh] bg-red-300  z-10 flex flex-col justify-between shadow-2xl rounded-md "+(lightMode?'day':'night-card')}>
    <span className="self-center">{list}</span>
    <div className="grid  grid-flow-col">
      <span className="capitalize">items left</span>
      <div className="grid gap-2 grid-cols-3 mr-3">
        <button className="capitalize">All</button>
        <button className="capitalize">Active</button>
        <button className="capitalize">Completed</button>
      </div>
      <button  className="capitalize">clear Completed</button>
    </div>
    </div>;
};

export default Body;
