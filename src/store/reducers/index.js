import { combineReducers } from "redux";
import { productReducer } from "./productData";
import favoritesReducer from "./favoritesReducer";
import modalReducer from "./modalReducer";
import cartReducer from "./cartReducer";
import selectedCartReducer from "./selectedCartReducer";

const rootReducer = combineReducers({
  product: productReducer,
  favorites: favoritesReducer,
  modal: modalReducer,
  cart: cartReducer,
  selectedCart: selectedCartReducer,
});

export default rootReducer;
