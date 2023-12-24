import React from 'react'
import { useProducts } from '../../context/ShopContext'


function ProductDetails() {
  const {product,addToCart,countItems} = useProducts();

  const handleAddItem = () => {
    addToCart(product);
  }

  const handleCount = () => {
    if(countItems[product.id] !== undefined){
      return countItems[product.id].count;
    }  
  }

  return (
    <div className='productDetails'>
      <div className="row">
        <img src={product.productImage} alt="" />
        <div className='productProperties'>
          <h2>{product.productName}</h2>
          <span className='price'>${product.price}</span>
          <p className='productDescription'><span>About</span>{product.description}</p>
          <div className='addProduct'>
            <button onClick={handleAddItem}>Add to Cart {handleCount()}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails