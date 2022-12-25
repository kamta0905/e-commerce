import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
