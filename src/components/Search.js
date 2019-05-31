import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Hooks
import useFormHandler from "../hooks/useFormHandler";

const Search = props => {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    clearInputs
  } = useFormHandler(props.onSearch);

  return (
    <div className="container sticky-top">
      <h3
        className="is-size-3 has-text-centered"
        style={{ marginBottom: "20px" }}
      >
        | Search |
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Search by US City</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="by_city"
              placeholder="Enter a US City"
              value={inputs.by_city}
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
              value={inputs.by_state}
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
              value={inputs.by_name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">
            Search by Type
            <br />
            <sub
              className="has-text-weight-light"
              style={{ fontSize: ".6rem" }}
            >
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
              value={inputs.by_type}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-medium search-btn">
              <span className="icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Search</span>
            </button>
          </div>
          <div className="control level">
            <button
              className="button is-small is-outlined"
              onClick={clearInputs}
            >
              Clear Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
