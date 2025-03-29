import React from 'react'
import './Product.css'
import { useContext } from 'react';
import { cartContext } from './cartContext.jsx'

function Product({product}) {
  const {cart,setCart}=useContext(cartContext)

    const name=product.name.length>21 ? product.name.substring(0,20)+"..":product.name;
   const addCart = () =>{
    setCart([...cart, product ])
   }
   const removeCart=()=>{
    setCart(cart.filter((c)=>c.id !== product.id))
   }

    return (
    <div className='product'>
        <div className="img">
           <img src={product.image} alt={product.name} />
        </div>
        <div className="details">
        <h3>{name}</h3>
        <p>Price: ₹ {product.amount}</p>
        {cart.includes(product) ? (
          <button className='btnRemove' onClick={removeCart}>Remove from cart</button>
          ) : (<button onClick={addCart}>Add to cart</button>)
        }
        </div>
    </div>
  )
}

export default Product