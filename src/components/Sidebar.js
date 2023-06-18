import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Sidebar = ({ isVisible, onClose }) => {
  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      <FaBars className="category-bar" onClick={() => onClose(true)} />
      <IoIosCloseCircleOutline
        className="close-button"
        onClick={() => onClose(false)}
      />
      <h4 className="filter-head">Filter by Category</h4>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <Link
            onClick={() => onClose(false)}
            className="list-group-item list-group-item-action"
            to="/Simple-Online-Store-Page/"
          >
            All
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            onClick={() => onClose(false)}
            className="list-group-item list-group-item-action"
            to="/Simple-Online-Store-Page/men's clothing"
          >
            Men's Clothing
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            onClick={() => onClose(false)}
            className="list-group-item list-group-item-action"
            to="/Simple-Online-Store-Page/women's clothing"
          >
            Women's Clothing
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            onClick={() => onClose(false)}
            className="list-group-item list-group-item-action"
            to="/Simple-Online-Store-Page/electronics"
          >
            Electronics
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            onClick={() => onClose(false)}
            className="list-group-item list-group-item-action"
            to="/Simple-Online-Store-Page/jewelery"
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
