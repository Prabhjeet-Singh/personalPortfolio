import React from "react";
import cross from "../images/icon-cross.svg";
import { ACTIONS} from '../App'

const List = ({todos,lightMode,dispatch}) => {
    // const [check,setCheck]=useState(false)
  return( <div className="text-center items-center">
    {todos.map((todo,id)=>{
       return (<div key={id}>
        <div className="flex items-center justify-between px-4">
          <input type="checkbox" onChange={()=>dispatch({type:ACTIONS.CHECK_TODO,payload:{id:todo.id}})} />
       <p className="cursor-pointer min-h-[2.8rem]  " >{todo.name}</p>
          <img src={cross} alt="img" onClick={()=>dispatch({type:ACTIONS.DEL_TODO,payload:{id:todo.id}})}/>
        </div>
       <span className={"border-b border-gray-400  w-full block "+(lightMode?"day":"night")}></span>
       </div>
             
       );
    })}
    </div>);
};

export default List;
