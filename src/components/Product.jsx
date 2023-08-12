import React, { useState } from "react";
import { AiOutlineStar, AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/actions/favoritesActions";
import { openModal } from "../store/actions/modalActions";
import ModalWindow from "./ModalWindow";
import { addToCart, removeFromCart } from "../store/actions/cartActions";

export default function Product({ productInfo }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cartItems);
  const isFavorite = favorites.some((item) => item.id === productInfo.id);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const handleCartIconClick = () => {
    const action = cart.some((item) => item.id === productInfo.id)
      ? handleDeleteFromCart
      : handleAddToCart;

    dispatch(openModal(productInfo, action));
  };

  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(productInfo.id));
    } else {
      dispatch(addToFavorites(productInfo));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productInfo));
  };

  const handleDeleteFromCart = () => {
    dispatch(removeFromCart(productInfo.id));
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
          {cart.some((item) => item.id === productInfo.id) ? (
            <AiFillCloseCircle
              className="product-icon"
              onClick={handleCartIconClick}
            />
          ) : (
            <FaShoppingCart
              className="product-icon"
              onClick={handleCartIconClick}
            />
          )}
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow
          productInfo={productInfo}
          isDeleting={cart.some((item) => item.id === productInfo.id)}
        />
      )}
    </div>
  );
}
