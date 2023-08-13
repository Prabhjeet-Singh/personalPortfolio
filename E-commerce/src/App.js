import { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';

function App() {
 const [pet,setPet]=useState([])

 useEffect(()=>{
   client.fetch(`*[_type == "pet"]`)
   .then((data)=>setPet(data))
   .catch(console.error)
 },[])
  return (
    <>
    {pet.map((pet)=>pet.name)}
   <h1>this is working</h1>
    </>
  );
}



export default App;