import './App.css';
import bgDesktopImg from './images/bg-desktop-dark.jpg';
import bgLightDesktopImg from './images/bg-desktop-light.jpg';
import light from './images/icon-sun.svg';
import dark from './images/icon-moon.svg';
import { useState } from 'react';

function App() {
  const [lightMode,setLightMode]=useState(true)
  const [name ,setName]=useState('')
  return (
    < div className=' flex flex-col h-screen bg-black items-center justify-center'>
     <img src={lightMode?bgLightDesktopImg:bgDesktopImg} alt="img" className=' w-screen absolute  top-0 '/>
    
  <div className='z-10 max-w-[60rem] '>
    
        
      {/* navbar start */}
        <div className='flex justify-between items-center   max-w-[40rem]'>
          <h1 className='uppercase text-4xl'>todo</h1>
          <img src={lightMode?light:dark} alt='mode' onClick={()=>setLightMode(!lightMode)}/>
        </div>
       
        {/* navbar end */}

        <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} className=''/>
      
   
  </div>
      


    </div>
  );
}

export default App;
