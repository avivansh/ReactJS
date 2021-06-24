import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styles from "./Topbar.module.css";

const Card = ({ preview, name, description }) => {
  return (
    <>
      <div className="card" styles="width: 18rem;" className={styles.card}>
        <img
          className="card-img-top .max-width: 10%;"
          src={preview}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text" className={styles.desc}>
            {description}
          </p>
          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className={styles.card_cont}>
      {products.length &&
        products.map(({ name, preview, description }) => (
          <>
            <Card preview={preview} name={name} description={description} />
          </>
        ))}
    </div>
  );
};

export default Cards;
