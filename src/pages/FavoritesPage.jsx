import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function FavoritesPage() {
  const storedFavorites = useSelector((state) => state.favorites.favorites);
  console.log(storedFavorites);

  return (
    <div className="home-page">
      {storedFavorites.length === 0 && <p>No favorites found</p>}
      {storedFavorites && <ProductList productsArray={storedFavorites} />}
    </div>
  );
}
