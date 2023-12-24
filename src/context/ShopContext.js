import {useContext,createContext, useState} from 'react';

const ShopContext = createContext();

function ShopContextProvider({children}) {
  const [product,setProduct] = useState({});
  const [cartItems,setCartItems] = useState([]);
  const [countItems,setCountItems] = useState([]);

  const getTotalItems = () =>{
      let total = 0;
      for (let id in countItems) {
        total += countItems[id].count;
      }
      return total;
  }

  const getTotalPrice = () =>{
    let totalprice = 0;
    cartItems.map(cartItem=>{
      totalprice += cartItem['price'] * countItems[cartItem['id']].count;
    })

    return totalprice;
  }

  const addToCart = (item) => {
    //we need to add items and keep added items
      setCartItems(prevItems=>{
        if (prevItems !== null && prevItems.find((prevItem) => prevItem.id === item.id)) {
          // If the item is already in the array, return the array as is
           return [...prevItems];
            } else {
          // If the item is not in the array, add it
          return (prevItems === null) ? [item] : [...prevItems, item];
        } 
      })
       
      setCountItems(
        {
          ...countItems,
          [item.id]:{
            count: countItems[item.id] !== undefined ? countItems[item.id].count + 1 : 1// take existing value and increase it  
          }
        }
      )  
  }
  
  const removeFromCart = (item) => {
    //if there is no item we wont show removeFromCart button
    if(countItems[item.id] !== undefined){
      if(countItems[item.id].count === 1){
        // if count ıtems item.id === 1 ? 
         setCountItems(prevCountItems => {
          const newCountItems = {...prevCountItems}; 
          delete newCountItems[item.id]; 
          return newCountItems; 
        });
        
        setCartItems(prevItems=>{
          return Array.from(prevItems).filter(prevItem =>{
            return prevItem.id !== item.id
          });
        });
      }
      
      else if(countItems[item.id].count > 0){
        setCountItems(
          {
            ...countItems,
            [item.id]:{
              count: countItems[item.id].count -1  
            }
          }
        )  
      }
    }
  }

  return (
    <ShopContext.Provider value={{product,setProduct,cartItems,addToCart,removeFromCart,countItems,setCountItems,getTotalItems,getTotalPrice}}>{children}</ShopContext.Provider>    
  )
}

export default ShopContextProvider;

export function useProducts(){
    return useContext(ShopContext);
}