import React from "react";

const CateProducts = ({item}) => {
  return (<div className="min-w-[15rem] min-h-[10rem] bg-white shadow-lg rounded-xl m-3 flex items-center justify-center">
    <img src={item.imageUrl} alt={item.title} className='w-[6rem] h-[6em] ' />
    <div>
    <h2>{item.title}</h2>
    <div>
    {/* <button className="text-white bg-pink-500 w-[4rem] h-9 rounded-2xl border-2 hover:text-pink-500 hover:bg-white hover:border-pink-500">Cart</button> */}
    <button className="text-white bg-pink-500 w-[4rem] h-9 rounded-2xl border-2 hover:text-pink-500 hover:bg-white hover:border-pink-500">Buy</button>
    </div>
    </div>
    {/* <p>{item.description}</p> */}

   
  </div>);
};

export default CateProducts;
