import React, { useEffect} from "react";
import Header from './components/Header/Header'
import Shopping from "./pages/Shopping/Shopping";
import {Routes,Route,useLocation} from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductDetails from './pages/Shopping/ProductDetails'
import './App.css';

function App() {
  const location = useLocation();
  useEffect(()=>{},[location.pathname])
  
  return (
    <>
      {(!(location.pathname === '/login') && !(location.pathname === '/register'))&&<Header/>}
      <Routes>
      <Route path="/" element={<Shopping/>}/>
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
