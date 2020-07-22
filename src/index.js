import React, { useState } from "react";

import ReactDOM from "react-dom";

import axios from "axios";

import Modal from "react-modal";

import { fetchProducts } from "./api";

import { CartList, SearchBar, SearchResults } from "./components";

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

    const addProductToCart = ({ id, name, price }) => {
      const nextCart = [...cart];
      const index = nextCart.findIndex((product) => product.id === id);

      if (index > -1) {
        nextCart[index].count += 1;
      } else {
        nextCart.push({
          id,
          name,
          price,
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
    console.log("hello");
    return (
      <div id="app">
        <SearchBar setResults={setResults} />
        <SearchResults
          results={results}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
        />
        {cart.length > 0 && (
          <CartList
            cart={cart}
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
          />
        )}
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
};
