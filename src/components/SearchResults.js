import React, { useState, useEffect } from "react";
import { getDaProducts } from "../Auth/index";
import Product from "./Product";
import "./SearchResults.css";

function designCard(data) {
  return (
    <Product
      key={data.id}
      id={data.id}
      title={data.title}
      photo={data.photo}
      price={data.price}
      description={data.description}
    />
  );
}

const SearchResults = ({ addProductToCart, removeProductFromCart }) => {
  const [myProducts, setMyProducts] = useState([]);
  console.log(myProducts);
  useEffect(() => {
    getDaProducts().then(setMyProducts);
  }, []);
  console.log(myProducts);
  return (
    <div id="results">
      <div className="ProductList">{myProducts.map(designCard)}</div>
    </div>
  );
};

export default SearchResults;
