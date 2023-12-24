import React from 'react'
import Product from './Product';
import { PRODUCTS } from '../../data/products';
import './Shopping.css';

function Shopping() {  
  return (
    <div className='shopping'>
      <span>Products</span>
      <div className='products'>
      {
       PRODUCTS.map((product)=>{
        return <Product key={product.id} data={product}/>   
       })
      }
      </div>
    </div>
  )
}

export default Shopping