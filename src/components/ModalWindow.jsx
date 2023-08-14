import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/actions/modalActions";
import { addToCart, deleteFromCart } from "../store/actions/cartActions";

export default function ModalWindow({ isCartPage }) {
  const dispatch = useDispatch();

  const title = isCartPage ? "Remove from Cart" : "Add to Cart";
  const description = isCartPage
    ? "Do you want to remove this product from your cart?"
    : "Do you want to add this product to your cart?";

  const selectedProduct = useSelector(
    (state) => state.selectedCart.selectedProduct
  );

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  const addToCartFunction = () => {
    dispatch(addToCart(selectedProduct));
    dispatch(closeModal());
  };

  const removeFromCartFunction = () => {
    dispatch(deleteFromCart(selectedProduct.id));
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <header>
        <h1 className="modal-title">{title}</h1>
        <button
          className="close-btn"
          onClick={() => {
            closeModalWindow();
          }}
        >
          X
        </button>
      </header>
      <p className="modal-desc">{description}</p>
      <div className="button-sec">
        {isCartPage ? (
          <button
            onClick={() => {
              removeFromCartFunction();
            }}
          >
            Remove
          </button>
        ) : (
          <button onClick={addToCartFunction}>Add</button>
        )}
        <button
          onClick={() => {
            closeModalWindow();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
