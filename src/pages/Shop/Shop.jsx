import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product';
import './Shop.css'

export const Shop = () => {
  
  return (
    <div className='shop'>
      <div className='shopTitle'>
        Ecommerce App
      </div>

      <div className='products'>
       {
        PRODUCTS.map((product)=>(
          <Product data = {product}/>
        ))
       }
      </div>
    </div>
  )
}
