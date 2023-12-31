import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const favoritesNum = useSelector((state) => state.favorites.favorites.length);
  // console.log(favoritesNum);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar-logo">MiriShop</h1>
      </Link>
      <div className="navbar-icons">
        <div>
          <Link to="/favorites">
            <FaStar className="nav-icon" />
          </Link>
          {favoritesNum > 0 && (
            <div className="product-num">{favoritesNum}</div>
          )}
        </div>

        <div>
          <Link to="/cart">
            <FaCartShopping className="nav-icon" />
          </Link>
          {cartItems && cartItems.length > 0 && (
            <div className="product-num">{cartItems.length}</div>
          )}
        </div>
      </div>
    </div>
  );
}
