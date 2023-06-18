import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import ProductDetails from "./ProductDetails";

const AppRoutes = ({ products, searchTerm }) => {
  return (
    <Routes>
      <Route
        path="/Simple-Online-Store-Page/"
        element={<CategoryPage products={products} searchTerm={searchTerm} />}
      />
      <Route
        path="/Simple-Online-Store-Page/:category"
        element={<CategoryPage products={products} searchTerm={searchTerm} />}
      />
      <Route
        path="/Simple-Online-Store-Page/product/:id"
        element={<ProductDetails products={products} searchTerm={searchTerm} />}
      />
    </Routes>
  );
};

export default AppRoutes;
