import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import ModalWindow from "./ModalWindow";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductList({ productsArray }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="product-list">
      {productsArray.map((product) => (
        <Product key={product.id} productInfo={product} />
      ))}
    </div>
  );
}
