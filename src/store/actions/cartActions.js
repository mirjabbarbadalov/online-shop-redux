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
