import "./App.css";
import bgDesktopImg from "./images/bg-desktop-dark.jpg";
import bgLightDesktopImg from "./images/bg-desktop-light.jpg";
import light from "./images/icon-sun.svg";
import dark from "./images/icon-moon.svg";
import { useState } from "react";
import Body from "./components/Body";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [list, setList]=useState([''])
  const [name, setName] = useState("");

  const handleSumbit=()=>({
  //  setList(name);
  })
  return (
    <div className={"flex flex-col h-screen   items-center gap-6 text-white  pt-20 "+(lightMode?'day':'night')} >
      <img
        src={lightMode ? bgLightDesktopImg : bgDesktopImg}
        alt="img"
        className=" w-screen absolute  top-0 "
      />

      <div className="z-10 max-w-[60rem] ">
        {/* navbar start */}
        <div className="flex justify-between items-center   max-w-[40rem]">
          <h1 className="uppercase text-4xl text-white">todo</h1>
          <img
            src={lightMode ? dark : light}
            alt="mode"
            onClick={() => setLightMode(!lightMode)}
          />
        </div>

        {/* navbar end */}

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onSubmit={handleSumbit}
          className="md:min-w-[25rem] min-h-[2.5rem] rounded-md mt-5 text-black"
        />
      </div>
      <Body lightMode={lightMode} list={list} />
    </div>
  );
}

export default App;
