const initialState = {
  selectedProduct: null,
};

const selectedCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_CART":
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default selectedCartReducer;
