const initialState = {
  data: [],
  loading: true,
  success: false,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        ...state,
        success: false,
        loading: true,
        error: false,
      };

    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
      };

    default:
      return state;
  }
};
