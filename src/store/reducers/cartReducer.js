const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")),
  //I changed this part, and I think it works properly.
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "DELETE_FROM_CARD":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "SEND_CARTS_TO_STORAGE":
      return {
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
