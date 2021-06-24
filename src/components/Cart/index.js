import React,{useState,useEffect} from 'react';
import PDP from '../PDP';
const Cart = ({id,name}) => {
    console.log("cart is been called")
    const [cart, updateCartItems]= useState([])
    cart.push(name)
    console.log(cart.length)
    return (  
        <>
            {cart.length&& cart.map((name)=> <h1>{name}</h1>)}
        </>
    );
}
 
export default Cart;
