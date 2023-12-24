import React from 'react';
import './Shopping.css';
import {Link} from 'react-router-dom';
import { useProducts } from '../../context/ShopContext';

function Product({data}) {  
  const {id,productName,price,productImage,description} = data;
  const {setProduct} = useProducts();
  const handleOnClick = () =>{
    setProduct({
      id:id,
      productName:productName,
      price:price,
      productImage:productImage,
      description:description});
  }

  return (
      <div className='product'>
        <div className='description'>
        <img src={productImage} className='image' alt="" />        
        <span className='title'>{productName}</span>
        <span>${price}</span>
      </div>
      <Link to={'/details/' + id + '/' + productName}>
        <button className='details'
         onClick={handleOnClick}>
          Details
        </button>
      </Link>
    </div>
  )
}

export default Product