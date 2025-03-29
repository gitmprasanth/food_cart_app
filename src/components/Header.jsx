import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header({cart}) {
  return (
    <div className='navbar'>
        <div className="logo">Food Cart</div>

        <ul >
            <li>
               <Link to={"/"} >
                 <span className='home'>  Home </span> 
                </Link>
               </li>
            <li >
           <Link to={"/Cart"} > 
            <span>View cart   </span>
            <span className='cart-count'>   {cart.length}</span>
            </Link>
             </li>
        </ul>

    </div>
  )
}

export default Header