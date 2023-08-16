export const sendCartsToStorage = (cartArray) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SEND_CARTS_TO_STORAGE",
        payload: cartArray,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (selectedProduct) => {
  return {
    type: "ADD_TO_CART",
    payload: selectedProduct,
  };
};

export const deleteFromCart = (selectedProductId) => {
  return {
    type: "DELETE_FROM_CARD",
    payload: selectedProductId,
  };
};
