import React,{useState,useEffect} from 'react';
import PDP from '../PDP';
import { connect } from "react-redux";
import { getProducts, addToCart, zeroTheCart } from "../../redux/actions";
import {Redirect} from "react-router-dom"
import { Link } from "react-router-dom";

const Cart = (props) => {
    const {cart,products,clearCart}=props
    const getTotal=()=>{
        return cart.reduce((acc,item)=> acc+item.price*item.quantity,0)
    }
    const path=process.env.PUBLIC_URL
    return (  
        <div className="cart_container">
            {
                cart.length && cart.map(({price,name,quantity})=> 
                <div className="ind_cart_prod">
                    <h1>{name}</h1>
                    <h3 className="m-4">Rs. {price}/-</h3>
                    <h3 className="m-4">X {quantity}</h3>
                    <h3 className="m-4">Rs. {price*quantity}/-</h3>
                </div>
                )
            }
            <h1 className="total_price">total is Rs. {getTotal()}/-</h1>

            <button className="checkout" onClick={()=>{
                props.history.push(`${path}/products`)
                clearCart()
                
            }}>checkout</button>
        </div>
    );
}
 
  
  const mapStateToProps = (store) => ({
    products: store.products,
    cart: store.cart
  });
  
  const mapDispatchToProps = (dispatch) => ({
    sendProducts: (payload) => dispatch(getProducts(payload)),
    updateCart:   (payload)=> dispatch(addToCart(payload)),
    clearCart: ()=> dispatch(zeroTheCart())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);