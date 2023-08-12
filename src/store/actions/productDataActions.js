const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_REQUEST,
    });

    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
