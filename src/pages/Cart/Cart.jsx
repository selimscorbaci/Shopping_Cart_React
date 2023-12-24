import React from 'react'
import { useProducts } from '../../context/ShopContext'
import './Cart.css'

function Cart() {
  const {cartItems,addToCart,removeFromCart,countItems,getTotalPrice} = useProducts();
  
  const handleRemoveItem = (item)=>{
    removeFromCart(item);
  }
    
  const handleAddItem = (item)=>{
    addToCart(item);
  }

  return (  
    (cartItems.length !== 0 ? 
  <div className='cart'>
  <table>
    <thead>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </thead>
    
    {Array.from(cartItems).map(item=>{
      return <tbody key={item['id']}> 
      <td key={item['id']}><img src={item["productImage"]} alt="" /></td>
      <td className='item'>
        <span>{item["productName"]}</span>
          <span>${item["price"]}</span>
      </td>

      <td className='editItem'><button onClick={()=>handleRemoveItem(item)}>-</button> <input type="text" readOnly value={countItems[item["id"]].count}/> <button onClick={()=>handleAddItem(item)}>+</button></td>
      <td><span>${item["price"]*countItems[item["id"]].count}</span></td>
      </tbody>
      })}
  </table>
      <div className='completeShopping'>
      <span>Total: ${getTotalPrice()}</span>
    
      <button>Complete the Shopping</button>

      </div>

  </div> : <p className='emptyCard'>Your cart is empty</p>)
    
  )
}

export default Cart