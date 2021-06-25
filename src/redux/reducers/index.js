const initialState = {
    userDetails: [],
    products: [{ name: "Vansh", age: 21 }],
    cart: [],
    
  };
  
  const Reducers = (state = initialState, {type,payload}) => {
    switch (type) {
        case "GET_PRODUCTS":return { ...state, products: payload };


        case "ADD_TO_CART":{
          let updateCart =[]
          const productId =payload.id
          const {cart} =state

          const index=cart.findIndex((item)=> item.id===productId)

          if(index!==-1){
            cart[index].quantity+=1
            updateCart=cart
          }
          else{
            updateCart=[...cart,{...payload,quantity:1}]
          }

          return { ...state, cart: updateCart };
        
        }

        case "ZERO_THE_CART":{
          return {...state,cart:[]}
        }

        
        default:return state;
    }
  };
  
  export default Reducers;