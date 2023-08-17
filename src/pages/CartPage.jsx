import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import Form from "../components/Form";

export default function FavoritesPage() {
  const storedProducts = useSelector((state) => state.cart.cartItems);
  // console.log(storedProducts);

  return (
    <div className="home-page">
      <div>
        {storedProducts.length === 0 && (
          <p className="no-found-message">No products found</p>
        )}
        {storedProducts && (
          <ProductList productsArray={storedProducts} isCartPage={true} />
        )}
      </div>
      <div>
        {storedProducts && <div>{storedProducts.length > 0 && <Form />}</div>}
      </div>
    </div>
  );
}
