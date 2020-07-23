import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Modal from "react-modal";
import { fetchProducts } from "./api";
import { CartList, SearchBar, SearchResults, Header } from "./components";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./index.css";

function App() {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [userToken, setUserToken] = useState([]);
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
  return (
    <Router>
      <div id="app">
        <Header />
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
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
