import React, { useState } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import { CartList, SearchBar, SearchResults } from "./components";
import { fetchCards } from "./api";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div id="app">
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
      <CartList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
