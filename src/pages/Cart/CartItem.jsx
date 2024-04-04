import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export const CartItem = (props) => {

  const {id, price , productName , productImage} = props.data;
   const { addToCart,removeFromCart, cartItems, getTotalAmount, updateTotalAmount, checkout } = useContext(ShopContext)

  return (
    <div className='cartItem'>
      <img src={productImage}/>
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={()=>addToCart(id)} >+</button>
          <input  value={cartItems[id]} onChange={(e)=>updateTotalAmount(Number(e.target.value), id)}/>
          <button onClick={()=>removeFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  )
}
