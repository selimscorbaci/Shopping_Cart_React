import React, { useEffect} from "react";
import Header from './components/Header/Header'
import './App.css';
import Shopping from "./pages/Shopping/Shopping";
import {Routes,Route,useLocation} from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductDetails from './pages/Shopping/ProductDetails'

function App() {
  const location = useLocation();
  useEffect(()=>{},[location.pathname])
  
  return (
    <>
      {(!(location.pathname === '/login') && !(location.pathname === '/register'))&&<Header/>}
      <Routes>
      <Route path="/" element={<Shopping/>}/>{/* we used Shopping component as index we didnt add Shopping for component for this particular page but when project runs it shows Shopping component because of index*/}
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/details/:id/:productName" element={<ProductDetails/>}/>   
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>

    </>
  );
}

export default App;
