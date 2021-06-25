import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cart from "../Cart";
import { connect } from "react-redux";
import { getProducts, addToCart } from "../../redux/actions";

const PDP = ({updateCart}) => {
  const [product, setProduct] = useState({});
 
  const { id } = useParams();
  // const { id } = props.match.params;
  const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";

  const { productId = "", name = "", preview = "", brand = "", photos =[], description = "", price=""} = product;

  //component did mount
  useEffect(() => {
    axios(`${url}${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert(err));
  }, []);
  
  const curr_photo_index=0
  const last_phot_index=0
  const style={border:"none"}
  return (

    <>
    
      <div className="container">
          <div className="left">
              <img src={preview} width="500"/>
          </div>

          <div className="right" className="m-5">
            
              <h1>{name}</h1>
              <h3>{brand}</h3>
              <h3 className="price">{price}/-</h3>
              <p className="desc">{description}</p>
                <div className="photos" className="d-flex flex-row">
                {
                  photos.map((photo,index)=>
                    <>
                    
                    <div className="p-1 ">
                    
                    <img src={photo} className="ind_photo" onClick={()=>{
                      
                      
                      
                      setProduct({...product, preview:photo})
                       
                    }
                    }/>
                    </div>
    
                    
                    </>
                    )
                  }
              </div>

              <button className="add_to_cart" onClick={()=>{
                updateCart({ preview, name, description,id,price })
                
              }}>Add to cart</button>

          </div>
      </div>

    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(PDP);

