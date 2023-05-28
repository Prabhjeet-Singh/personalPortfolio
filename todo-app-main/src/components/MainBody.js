import List from './List';
import { ACTIONS } from "../App";

const MainBody = ({lightMode,todos,dispatch}) => {
 
  return <div className={"md:max-w-[35rem] min-h-[30vh] bg-red-300  z-10 flex flex-col justify-between shadow-2xl rounded-md "+(lightMode?'day':'night-card')}>
    <List todos={todos} lightMode={lightMode} dispatch={dispatch} />
    
    <div className="grid  grid-flow-col">
      <span className="capitalize">{todos.length?todos.length : "0"} items left</span>
      <div className="grid gap-2 grid-cols-3 mr-3">
        <button className="capitalize" onClick={()=>dispatch({type:ACTIONS.ALL_TODO})}>All</button>
        <button className="capitalize" onClick={()=>dispatch({type:ACTIONS.ACTIVE_TODO})}>Active</button>
        <button className="capitalize" onClick={()=>dispatch({type:ACTIONS.COMPLETED_TODO})}>Completed</button>
      </div>
      <button  className="capitalize">clear Completed</button>
    </div>
    </div>;
};

export default MainBody;
