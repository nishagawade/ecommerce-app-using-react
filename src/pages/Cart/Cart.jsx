import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import {CartItem} from './CartItem';
import './Cart.css'
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {

 const { addToCart,removeFromCart, cartItems, getTotalAmount, updateTotalAmount, checkout } = useContext(ShopContext);
 const totalAmount = getTotalAmount();
 const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart</h1>
      </div>

      <div className='cart'>
        {
          PRODUCTS.map((product)=>{
             if(cartItems[product.id] !== 0){
              return <CartItem data= {product} />
            }           
         })
        }
      </div>

      {
        totalAmount > 0 ? 
        <div className='checkout'>
         <p>TotalAmount : ${totalAmount}</p>
         <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div> 
        : <h1> your shopping cart is empty</h1>
      }

    </div>
  )
}
