import React, { useState } from "react";

import ReactDOM from "react-dom";

import axios from "axios";

import Modal from "react-modal";

import { CartList, SearchBar, SearchResults, Register } from "./components";

import { fetchCards } from "./api";

import "./index.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [userToken, setUserToken] = useState([]);

  const addProductToCart = ({ id, name }) => {
    const nextCart = [...cart];
    const index = nextCart.findIndex((product) => product.id === id);

    if (index > -1) {
      nextCart[index].count += 1;
    } else {
      nextCart.push({
        id,
        name,
        count: 1,
      });
    }

    setCart(nextCart);
  };

  const removeProductFromCart = ({ id }) => {
    const nextCart = [...cart];
    const index = nextCart.findIndex((product) => product.id === id);

    if (index === -1) {
      return;
    }

    if (nextCart[index].count === 1) {
      nextCart.splice(index, 1);
    } else {
      nextCart[index].count -= 1;
    }
    setCart(nextCart);
  };

  return (
    <div id="app">
      <SearchBar setResults={setResults} />
      <SearchResults
        results={results}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />
      <CartList
        cart={cart}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
