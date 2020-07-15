import React from 'react';

import Product from './Product';
import './SearchResults.css';

const SearchResults = ({ 
  results,
  addProductToCart,
  removeProductFromCart
}) => {
  return (
    <div id="results">
      <div className="ProductList">
        {
          results.map(result => (
            <Product 
              key={ result.id } 
              addProductToCart ={ addProductToCart }
              removeProductFromCart ={ removeProductFromCart }
              {...result} />
          ))
        }
      </div>
    </div>
  );
}

export default SearchResults;
