import {useReducer, useState } from "react";
import "./App.css";
import bgDesktopImg from "./images/bg-desktop-dark.jpg";
import bgLightDesktopImg from "./images/bg-desktop-light.jpg";
import light from "./images/icon-sun.svg";
import dark from "./images/icon-moon.svg";
import Body from "./components/Body";
import Submit from "./components/Submit";
import Todo from "./components/Todo";

export const ACTIONS={
  ADD_TODO:'add-todo',
  DEL_TODO:'del-todo',
  CHECK_TODO:'check-todo',
  ACTIVE_TODO:'active-todo',
  COMPLETED_TODO:'completed-todo',
  ALL_TODO:'all-todo'
}

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [name, setName] = useState("");
  const initialState=[]
  const [data,setData]=useState([]);
  const [todos,dispatch]=useReducer(reducer,initialState)

function handleSubmit (e) {
  e.preventDefault();
  dispatch({type: ACTIONS.ADD_TODO ,payload:{name:name}})
    setData([...todos])
  setName('');
  console.log(data)
};

  function reducer(state,action){
   switch(action.type){
    case ACTIONS.ADD_TODO:
      
      return [...state,newTodo(action.payload.name)]
    case ACTIONS.DEL_TODO:
      return(state.filter(todo=>todo.id!==action.payload.id))
    case ACTIONS.CHECK_TODO:
      return (
        state.map((todo)=>{
          if(todo.id===action.payload.id){
            return {...todo,complete:!todo.complete}
          }
          else{
            return data
          }
        })
      )
    case ACTIONS.ACTIVE_TODO:      
      return(
        
        data.filter(todo=>todo.complete===false)
        )
    case ACTIONS.COMPLETED_TODO:
      return(data.filter(todo=>todo.complete!==false))
    case ACTIONS.ALL_TODO:

      return state
      
    default:
      return
   }
   
  }
function newTodo(name){
  return {id:Date.now() ,name:name, complete:false}
}

  return (
    <div
      className={
        "flex flex-col h-screen   items-center gap-6 text-white  pt-20 " +
        (lightMode ? "day" : "night")
      }
    >
      <img
        src={lightMode ? bgLightDesktopImg : bgDesktopImg}
        alt="img"
        className=" w-screen absolute  top-0 "
      />

      <div className="z-10 max-w-[60rem] ">
        <Todo lightMode={lightMode} setLightMode={setLightMode} light={light} dark={dark}/>
        <Submit name={name} setName={setName} handleSubmit={handleSubmit} lightMode={lightMode} />
      </div>

      <Body lightMode={lightMode}  todos={todos}  dispatch={dispatch} />
    </div>
  );
}

export default App;
