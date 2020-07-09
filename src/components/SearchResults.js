import React from "react";

import "./SearchResults.css";

import Card from "./Product";

const SearchResults = ({ results }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
