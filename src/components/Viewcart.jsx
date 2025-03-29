import React, { useEffect, useState ,useContext} from 'react'
import './Viewcart.css'
import { cartContext } from './cartContext.jsx'

function Viewcart() {
  const {cart}=useContext(cartContext)
  const[total,setTotal]=useState(0)
  useEffect(()=>{
  setTotal(cart.reduce((acc,current) =>acc+parseInt(current.amount),0))
  },[cart])
  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
      {cart.map((product)=>(
          <div className="cart-product" key={product.id}>
          <div className="img">
            <img src={product.image} alt="image" />
           </div>
           <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price ₹{product.amount}</p>
          </div>
        </div>
        )) }

      <h1 className='cart-amt'>Total Amount ₹ {total}</h1>
    </div>
     
    </>
  )
}

export default Viewcart