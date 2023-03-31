import React from "react";

const List = ({todos}) => {
  return( <div className="self-center">
    {todos.map(todo=>{
       return <p className="" key={todo.id}>{todo.name}</p>
    })}
    </div>);
};

export default List;
