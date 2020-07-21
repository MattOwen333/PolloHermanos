import React, { useState } from "react";
import { fetchProducts } from "../api";

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const products = await fetchProducts({ name, text });
    setResults(products);
  }

  return (
    <div id="search">
      <h3>Look up products here...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="product text"
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
