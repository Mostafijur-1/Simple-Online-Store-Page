import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { id, image, title, price } = product;

  const handleViewDetailsClick = () => {
    window.scrollTo(0, 0); // Scroll to top when "View Details" button is clicked
  };

  return (
    <div className="card product-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <Link
          to={`/Simple-Online-Store-Page/product/${id}`}
          className="btn btn-primary"
          onClick={handleViewDetailsClick}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
