import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styles from "../Topbar/Topbar.module.css"
import { Link } from "react-router-dom";

const Card = ({ preview, name, description,id }) => {
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
          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
        </Link>
      </div>
    </>
  );
};

const PLP = () => {
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
        products.map(({ name, preview, description,id }) => (
          <>
            <Card preview={preview} name={name} description={description} id={id} />
          </>
        ))}
    </div>
  );
};

export default PLP;