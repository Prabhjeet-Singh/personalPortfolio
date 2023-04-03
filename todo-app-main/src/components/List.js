import React, { useState } from "react";
import cross from "../images/icon-cross.svg";

const List = ({todos,lightMode}) => {
    const [check,setCheck]=useState(false)
  return( <div className="text-center items-center">
    {todos.map(todo=>{
       return (<div key={todo.id}>
        <div className="flex items-center justify-between px-4">
          <input type="checkbox"  />
       <p className="cursor-pointer min-h-[2.8rem]  " >{todo.name}</p>
          <img src={cross} alt="img"/>
        </div>
       <span className={"border-b border-gray-400  w-full block "+(lightMode?"day":"night")}></span>
       </div>
             
       );
    })}
    </div>);
};

export default List;
