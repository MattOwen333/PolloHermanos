import React from 'react';

import "./Product.css"

const Product = ({
    id,
    name, 
    price,
    description,
    imageUrl,
    addProductToCart,
    removeProductFromCart
}) => {
    return (
        <div className="Product">
        <div className="info">
          <p className="header">
            { name } - ${ price }
          </p>
          <p className="description">
            { description }
          </p>
        </div>
        <img className="preview" src={ imageUrl } />
        <div className="actions">
          <button onClick={() => {addProductToCart({id,name,price});}}>
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