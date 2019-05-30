import React from "react";

// Hooks
import useFormHandler from "../hooks/useFormHandler";

const Search = props => {
  const { inputs, handleInputChange, handleSubmit } = useFormHandler(
    props.onSearch
  );

  return (
    <div className="container sticky-top">
      <h3 className="is-size-3">Search</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Search by US City</label>
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

        <div className="field">
          <label className="label">Search by US State</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="by_state"
              placeholder="Enter a US State"
              value={inputs.state}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Search by Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="by_name"
              placeholder="Enter the Name of the Brewery"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">
            Search by Type
            <br />
            <sub className="is-size-7 has-text-weight-light">
              (micro, regional, brewpub, large, planning, bar, contract,
              proprietor)
            </sub>
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="by_type"
              placeholder="Enter the Type of Brewery"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
