import React from "react";
import ShopNow from "./ShopNow";
import CateProducts from "./semiComponents/CateProducts";

const AllProduts = ({hardware,clothes,electronics}) => {
  return( <div>
    {/* this is 100vh of webpage */}
    <ShopNow/>
    <div>
      <h2>Hardware Items</h2>
      <div className="flex overflow-x-scroll scroll-m-1">
     {hardware.map((item)=>{
       return (<CateProducts item={item}/>);
      })}
      </div>
    </div>
    </div>);
};

export default AllProduts;
