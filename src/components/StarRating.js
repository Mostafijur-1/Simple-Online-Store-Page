import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="star" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="star" />}
    </div>
  );
};

export default StarRating;
