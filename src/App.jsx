import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./Component/CartContext";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import ProductDetail from "./Component/ProductDetail";
import OurStory from "./Component/OurStory";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/story" element={<OurStory />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
