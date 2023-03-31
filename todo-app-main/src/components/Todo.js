import React from "react";

const Todo = ({lightMode,setLightMode,light,dark}) => {
  return  <div className="flex justify-between items-center   max-w-[40rem]">
  <h1 className="uppercase text-4xl text-white">todo</h1>
  <img
    src={lightMode ? dark : light}
    alt="mode"
    onClick={() => setLightMode(!lightMode)}
  />
</div>;
};

export default Todo;
