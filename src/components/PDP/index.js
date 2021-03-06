import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cart from "../Cart";
import { connect } from "react-redux";
import { getProducts, addToCart } from "../../redux/actions";

const PDP = ({updateCart}) => {
  const [product, setProduct] = useState({});
  const [active_photo,setActivePhoto]=useState(0)
 
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
  return (

    <>
    
      <div className="container">
          <div className="left">
              <img src={preview} className="preview_photo"/>
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
                    
                    <img src={photo} className={index===active_photo?"border_image":"ind_photo"} onClick={()=>{
                      
                      
                      setActivePhoto(index)
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

