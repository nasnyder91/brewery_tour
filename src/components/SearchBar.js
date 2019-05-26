import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [brewerySearch, setBrewerySearch] = useState("");

  useEffect(() => {
    console.log(brewerySearch);
  });

  return (
    <div className="container">
      <form>
        <div className="field">
          <label className="label">Search for a Brewery by US City</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter a US City"
              onChange={e => setBrewerySearch(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
