import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
