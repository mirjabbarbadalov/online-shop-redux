import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export default function FavoritesPage() {
  const storedFavorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="home-page">
      {storedFavorites.length === 0 && (
        <p className="no-found-message">No favorites found!</p>
      )}
      {storedFavorites && <ProductList productsArray={storedFavorites} />}
    </div>
  );
}
