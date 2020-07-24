import React, { useState } from "react";
import { fetchProducts } from "../api";

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const products = await fetchProducts({ name });
    setResults(products);
  }

  return (
    <div id="search">
      <h3>Welcome!</h3>
      <h3>Click the button below to get started!</h3>
      <form onSubmit={handleSubmit}>

        <button type="submit">Show me the products!</button>
      </form>
    </div>
  );
};

export default SearchBar;
