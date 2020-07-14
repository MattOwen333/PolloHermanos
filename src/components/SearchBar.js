import React from "react";

// import { fetchProducts } from "../api";

// const SearchBar = ({ setResults }) => {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const cards = await fetchProducts();
//     setResults(cards);
//   }

//   return (
//     <div id="search">
//       <h3>Find your next product here...</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="product search" />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from 'react';

import { fetchProducts } from "../api";

const SearchBar = ({ setResults }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setDescription(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const products = await fetchProducts({
      title,
      description,
    });

    setResults(products);
  }

  return (
    <div id="search">
      <h3>Find your next great sports memorabilia item here...</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="search"
          value={description}
          onChange={handleTextChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// possibly add category dropdown

export default SearchBar;

// const Cleaver = {
//   title: "Chop Cleaver",
//   description: "Authentic PolloHermano's Chop Cleaver",
//   photo: "https://i.ebayimg.com/images/g/DQ0AAOSwPEFbrh0R/s-l1600.jpg",
//   price: "$22.99",
// };
