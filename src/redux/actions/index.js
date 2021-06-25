export const getProducts = (payload) => {
    return {
      type: "GET_PRODUCTS",
      payload,
    };
  };

  export const addToCart = (payload) => {
    return {
      type: "ADD_TO_CART",
      payload,
    };
  };

  export const zeroTheCart = (payload) => {
    return {
      type: "ZERO_THE_CART",
      payload,
    };
  };
 