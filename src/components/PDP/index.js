import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const PDP = (props) => {
  const [product, setProduct] = useState({});
  //   const { id } = useParams();
  const { id } = props.match.params;
  const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";

  const { id: productId = "", name = "", preview = "", brand = "", photos =[], description = "", price="" } = product;

  //component did mount
  useEffect(() => {
    axios(`${url}${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      <div className="container">
          <div className="left">
              <img src={preview} width="500"/>
          </div>

          <div className="right">
              <h1>{name}</h1>
              <h3>{brand}</h3>
              <h3 className="price">{price}</h3>
              <p className="desc">{description}</p>
                <div className="photos">
                {

                    photos.map((photo)=>

                       <>
                        <img src={photo} className="ind_photo"/>
                        </>
                    )
                }
              </div>

              <button class="add_to_cart">Add to cart</button>
          </div>
      </div>
    </>
  );
};

export default PDP;

