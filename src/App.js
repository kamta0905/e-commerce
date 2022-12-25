import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
