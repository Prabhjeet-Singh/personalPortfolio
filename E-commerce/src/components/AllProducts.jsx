import React from "react";
import ShopNow from "./ShopNow";
import CateProducts from "./semiComponents/CateProducts";

const AllProduts = ({hardware,clothes,electronics}) => {
  return( <div>
    {/* this is 100vh of webpage */}
    <ShopNow/>
    <div>
      <h2 className="text-xl text-pink-500 p-4">Hardware Items</h2>
      <div className="flex overflow-x-scroll scroll-m-1">
     {hardware.map((item)=>{
       return (<CateProducts item={item}/>);
      })}
      </div>
    </div>
    <div>
      <h2 className="text-xl text-pink-500 p-4">Clothes</h2>
      <div className="flex overflow-x-scroll scroll-m-1">
     {clothes.map((item)=>{
       return (<CateProducts item={item}/>);
      })}
      </div>
    </div>
    <div>
      <h2 className="text-xl text-pink-500 p-4">Electronics</h2>
      <div className="flex overflow-x-scroll scroll-m-1">
     {electronics.map((item)=>{
       return (<CateProducts item={item}/>);
      })}
      </div>
    </div>
    </div>);
};

export default AllProduts;
