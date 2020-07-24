import React from "react";
import { addProductToCart, removeProductFromCart } from "../index";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="Product">
      <div className="info">
        <p className="header">
          {props.title} - ${props.price}
        </p>
        <p className="description">{props.description}</p>
      </div>
      <img src={props.photo} className="preview" alt="/" />
      <div className="actions">
        <button
          onClick={() => {
            addProductToCart({ id, title, price });
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            removeProductFromCart({ id });
          }}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
