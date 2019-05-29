import React from "react";

// Hooks
import useFormHandler from "../hooks/useFormHandler";

const SearchBar = props => {
  const { inputs, handleInputChange, handleSubmit } = useFormHandler(
    props.onSearch
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Search for a Brewery by US City</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="by_city"
              placeholder="Enter a US City"
              value={inputs.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
