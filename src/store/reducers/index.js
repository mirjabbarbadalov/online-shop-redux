import { combineReducers } from "redux";
import { productReducer } from "./productData";
import favoritesReducer from "./favoritesReducer";
import modalReducer from "./modalReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  product: productReducer,
  favorites: favoritesReducer,
  modal: modalReducer,
  cart: cartReducer,
});

export default rootReducer;
