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
      <h3>Look up products here...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
