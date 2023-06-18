import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const CategoryPage = ({ products, searchTerm }) => {
  const { category } = useParams();
  let filteredProducts = products;

  if (searchTerm) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when category changes
  }, [category]);

  return (
    <div className="row mt-3">
      {filteredProducts.length === 0 ? (
        <h3 style={{ padding: "20px", margin: "20px", color: "orange" }}>
          No product found !!!
        </h3>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <SingleProduct product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryPage;
