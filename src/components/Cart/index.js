import React,{useState,useEffect} from 'react';

const Cart = ({id,name}) => {
    console.log("cart is been called")
    const [cart, updateCartItems]= useState([])
    
    return (  
        <>
        <h1> Welcome to the cart</h1>
        <h1> {name}</h1>
        </>
    );
}
 
export default Cart;