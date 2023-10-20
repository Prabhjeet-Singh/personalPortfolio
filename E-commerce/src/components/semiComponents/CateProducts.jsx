import React from "react";

const CateProducts = ({ item }) => {
  return (
    <div className="min-w-[20rem] min-h-[15rem] bg-white shadow-lg rounded-xl m-3 flex items-center justify-center">
      <img src={item.imageUrl} alt={item.title} className="w-[6rem] h-[6em] " />
      <div>
        <h2>{item.title}</h2>
        <span>${item.Amount}</span>
        {console.log(item.Amount)}
        <div>
          <button className="btnClass">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CateProducts;
