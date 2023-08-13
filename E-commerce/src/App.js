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
 const [pet,setPet]=useState([])

 useEffect(()=>{
   client.fetch(`*[_type == "pet"]`)
   .then((data)=>setPet(data))
   .catch(console.error)
 },[])
  return (
    <>
   <BrowserRouter>
    <NavbarStore/>
   <Routes>
    <Route path='/' element={<AllProducts pet={pet}/>}/>
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