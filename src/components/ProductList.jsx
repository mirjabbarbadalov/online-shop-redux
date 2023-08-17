import { useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductList({ productsArray, isCartPage }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cartItems);
  // console.log(cart);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="product-list">
      {productsArray.map((product) => (
        <Product key={uuidv4()} productInfo={product} isCartPage={isCartPage} />
      ))}
    </div>
  );
}
