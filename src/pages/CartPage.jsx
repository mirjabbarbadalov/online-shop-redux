import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const storedProducts = useSelector((state) => state.cart.cartItems);
  // console.log(storedProducts);

  return (
    <div className="home-page">
      {storedProducts.length === 0 && <p>No products found</p>}
      {storedProducts && (
        <ProductList productsArray={storedProducts} isCartPage={true} />
      )}
    </div>
  );
}
