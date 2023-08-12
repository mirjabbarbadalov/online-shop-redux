import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/actions/modalActions";
import { addToCart, removeFromCart } from "../store/actions/cartActions";

export default function ModalWindow({ productInfo, isDeleting }) {
  const dispatch = useDispatch();

  const handleAction = () => {
    if (isDeleting) {
      dispatch(removeFromCart(productInfo.id));
    } else {
      dispatch(addToCart(productInfo));
    }
    dispatch(closeModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <header>
        <h1 className="modal-title">
          {isDeleting
            ? "Are you sure you want to delete this product?"
            : "Do you want to add this product to the cart?"}
        </h1>
        <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
      </header>
      <p className="modal-desc">
        {isDeleting
          ? "This action cannot be undone."
          : "Are you sure you want to add it?"}
      </p>
      <div className="button-sec">
        <button onClick={handleAction}>{isDeleting ? "Delete" : "Ok"}</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </div>
    </div>
  );
}
