const initialState = {
  isOpen: false,
  productInfo: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        productInfo: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        isOpen: false,
        productInfo: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
