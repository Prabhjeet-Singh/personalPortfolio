import './App.css';
import bgDesktopImg from './images/bg-desktop-dark.jpg';
import light from './images/icon-sun.svg';
import dark from './images/icon-moon.svg';
import { useState } from 'react';

function App() {
  const [lightMode,useLightMode]=useState(true)
  return (
    <>
    <div className="App h-screen bg-black   " >
     <div className='flex justify-between items-center z-40 relative '>
      <h1>todo</h1>
      <img src={lightMode?light:dark} alt='mode' />
     </div>
        </div>
     <img src={bgDesktopImg} alt="img" className=' w-screen absolute  top-0'/>
    </>
  );
}

export default App;
