import React from 'react';

import "./Product.css"

const Product = ({
    id,
    name, 
    type,
    manaCost,
    text,
    flavor,
    imageUrl,
    addProductToCart,
    removeProductFromCart
}) => {
    return (
        <div className="Product">
        <div className="info">
          <p className="header">
            { name } - { manaCost }
          </p>
          <p className="type">
            { type }
          </p>
          <p className="text">
            { text }
          </p>
          <p className="flavor">
            { flavor }
          </p>
        </div>
        <img className="preview" src={ imageUrl } />
        <div className="actions">
          <button onClick={() => {addProductToCart({id,name,});}}>
          Add to Cart
          </button>
          <button onClick={() => {removeProductFromCart({id});}}>
          Remove from Cart
          </button>
        </div>
      </div>
    );
}

export default Product;