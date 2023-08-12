import { useSelector, useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../store/actions/productDataActions";
import { useEffect } from "react";

export default function HomePage() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.data);
  const productsArray = productsData?.products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="home-page">
      {productsData.products && <ProductList productsArray={productsArray} />}
    </div>
  );
}
