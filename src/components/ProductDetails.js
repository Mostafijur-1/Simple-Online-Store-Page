import React from "react";
import { useParams } from "react-router-dom";

import StarRating from "./StarRating";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = ({ products, searchTerm }) => {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  const { title, price, description, category, image, rating } = product;

  return (
    <div>
      <div className="product-details">
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">Price: ${price}</p>
          <p className="product-category">Category: {category}</p>
          <div className="product-rating">
            <StarRating rating={rating.rate} />
            <span className="rating-count">({rating.count} reviews)</span>
          </div>
          <p className="product-description">{description}</p>
        </div>
      </div>
      <br />
      <br />
      <h4 className="related-head">Related Products</h4>
      <RelatedProducts
        products={products}
        searchTerm={searchTerm}
        category={category}
      />
    </div>
  );
};

export default ProductDetails;
