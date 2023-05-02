import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/products/Product";
import ProductDetails from "./components/products/ProductDetails";
import Wishlist from "./components/cart/Wishlist";
import AllProducts from "./components/products/AllProducts";
import AllProductDetails from "./components/products/AllProductDetails";
import Cart from "./components/cart/Cart";
import Login from "./components/home/Login";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/allproductdetails" element={<AllProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
