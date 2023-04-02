import React from "react";

const List = ({todos,lightMode}) => {
  return( <div className="text-center items-center">
    {todos.map(todo=>{
       return (<div key={todo.id}>
       <p className="cursor-pointer min-h-[2.8rem] p-2" >{todo.name}</p>
       <span className={"border-b border-gray-400  w-full block "+(lightMode?"day":"night")}></span>
       </div>
             
       );
    })}
    </div>);
};

export default List;
