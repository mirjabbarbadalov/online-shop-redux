import React from "react";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const storedProducts = JSON.parse(localStorage.getItem("cart"));
  console.log(storedProducts);

  return (
    <div className="home-page">
      {storedProducts.length === 0 && <p>No products found</p>}
      {storedProducts && <ProductList productsArray={storedProducts} />}
    </div>
  );
}
