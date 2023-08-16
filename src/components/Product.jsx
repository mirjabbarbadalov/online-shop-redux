import { AiOutlineStar, AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/actions/favoritesActions";
import { openModal } from "../store/actions/modalActions";
import { setSelectedCart } from "../store/actions/selectedCartAction";
import ModalWindow from "./ModalWindow";

export default function Product({ productInfo, isCartPage }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cartItems);
  const isFavorite = favorites.some((item) => item.id === productInfo.id);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(productInfo.id));
    } else {
      dispatch(addToFavorites(productInfo));
    }
  };

  const openModalWindow = () => {
    dispatch(openModal());
    dispatch(setSelectedCart(productInfo));
  };

  return (
    <div
      className="product"
      style={{ backgroundColor: `${productInfo.BackgroundColor}` }}
    >
      <img
        className="product-img"
        src={`${productInfo.ImageURL}`}
        alt={`${productInfo.Name}`}
      />
      <h1 className="product-title">{productInfo.Name}</h1>
      <p className="product-price">{productInfo.Price} $</p>
      <p className="product-sku"> |||{productInfo.SKU}|||</p>
      <div className="product-icons">
        <div>
          {isFavorite ? (
            <AiFillStar className="product-icon" onClick={handleFavorites} />
          ) : (
            <AiOutlineStar className="product-icon" onClick={handleFavorites} />
          )}
        </div>
        <div>
          {isCartPage ? (
            <AiFillCloseCircle
              className="product-icon"
              onClick={openModalWindow}
            />
          ) : (
            <FaShoppingCart
              className="product-icon"
              onClick={openModalWindow}
            />
          )}
        </div>
      </div>
      {isModalOpen && <ModalWindow isCartPage={isCartPage} />}
    </div>
  );
}
