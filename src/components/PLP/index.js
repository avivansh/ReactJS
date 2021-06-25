import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styles from "../Topbar/Topbar.module.css"
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { getProducts, addToCart } from "../../redux/actions";


const Card = ({ price,preview, name, description,id,updateCart,products }) => {
  const [count,setCount]=useState(0)
  return (
    <>
      <div className="card" styles="width: 18rem;" className={styles.card} key={id}>
          <Link to={`products/${id}`}>
        <img
          className="card-img-top .max-width: 10%;"
          src={preview}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" className={styles.name}>{name} </h5>
          <p className="card-text" className={styles.desc}>
            {description}
          </p>
        </div>
        </Link>
        <button class="btn btn-success" onClick={
          ()=>{ 

            updateCart({ preview, name, description,id,price })
              }
        }>
          Add to cart
          </button>
      </div>
    </>
  );
};

const PLP = ({products,sendProducts,updateCart}) => {
  
  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        sendProducts(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className={styles.card_cont}>
      {products.length &&
        products.map(({ name, preview, description,id,price }) => (
          <>
            <Card price={price} preview={preview} name={name} description={description} id={id} updateCart={updateCart} products={products}/>
          </>
        ))}
    </div>
  );
};

const mapStateToProps = (store) => ({
  products: store.products,
  cart: store.cart
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  updateCart:   (payload)=> dispatch(addToCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PLP);