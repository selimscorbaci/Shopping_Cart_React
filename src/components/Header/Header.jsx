import React, { useEffect, useState } from 'react'
import './Header.css'
import { BiUser } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ShopContext';
import DropDown from '../DropDownMenu/DropDown';
import { BsList } from "react-icons/bs";

function Navbar() {
  const { getTotalItems } = useProducts();
  const [dropDownState, setDropDownState] = useState(false);// 
  const [verticalDownState,setVerticalDownState] = useState(false);// clicked or not
  const [isSmallScreen,setIsSmallScreen] = useState();
  const handleTotalCount = () => {
  if (getTotalItems() > 0) {
      return getTotalItems();
    }
  }

  useEffect(()=>{
    setIsSmallScreen(window.innerWidth < 700);
  },[])

  return (
    <div className='navbar'>
      <Link to='/' className='logo'>WhiteStore</Link>
      {(isSmallScreen === false) && <ul className='navItems'>
        <li><BiUser className='icon' onClick={() => {
          setDropDownState(prev => {
            return !prev;
          })
        }} /></li>
        
        <li><Link to='/cart'><AiOutlineShoppingCart className='icon' /></Link></li><span className='totalCount'>{handleTotalCount()}</span>
      </ul>}
      {isSmallScreen && <BsList className='vertical-nav-icon' onClick={function(){
        // we need show the list or hide
        setVerticalDownState((prev)=>{
          return !prev;
        });
      }}/>}
      {verticalDownState && <ul className='vertical-list'>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/cart'>My Cart</Link></li>
      </ul>} 
      {dropDownState && <DropDown/>}
    </div>
  )
}

export default Navbar