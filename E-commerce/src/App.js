import { useEffect, useState } from 'react';
import './App.css';
import { client } from './client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Categories from './components/Categories';
import NavbarStore from './components/NavbarStore';
import FooterStore from "./components/FooterStore";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";


function App() {
 const [hardware,setHardware]=useState([])


 useEffect(()=>{
  async function fetchingData(){
    try{
      const data=await client.fetch('*[_type == "hardware"]');
      if(data!=null){
        setHardware(data);
      }
    }
    catch(error){
      console.error("This error occur in try catch block"+error);

    }
  }
  fetchingData();
},[])
return (
  <>
   {hardware.map(item => (
    
          <li key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            
            <img src={item.image.asset._ref} alt={item.title} />
            {console.log(item.image.asset._ref)}
          </li>
        ))}
   <BrowserRouter>
    <NavbarStore/>
   <Routes>
    <Route path='/' element={<AllProducts />}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
    <FooterStore/>
   
    </>
  );
}



export default App;