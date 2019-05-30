import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// Components
import Search from "./Search";
import BreweryList from "./BreweryList";
import BreweryMap from "./BreweryMap";

// Hooks
import useFetchBreweries from "../hooks/useFetchBreweries";

const App = () => {
  const [activeBrewery, setActiveBrewery] = useState(null);
  const [currentSearch, setCurrentSearch] = useState({});

  const { breweries, loadingBreweries, fetchBreweries } = useFetchBreweries();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-size-2 is-size-1-tablet">Brewery Tour</h1>
        <div className="columns is-desktop">
          <div className="column is-one-quarter-desktop">
            <Search
              onSearch={inputs => {
                fetchBreweries(inputs);
                setCurrentSearch(inputs);
              }}
            />
          </div>
          <div className="column is-three-quarters-desktop">
            {loadingBreweries ? (
              <FontAwesomeIcon
                icon={faSpinner}
                size="9x"
                style={{ display: "block", color: "black", margin: "auto" }}
                spin
              />
            ) : (
              <BreweryList
                breweries={breweries}
                breweryClicked={brewery => setActiveBrewery(brewery)}
                loadMoreClicked={() => {
                  const newSearch = {
                    ...currentSearch,
                    page: `${parseInt(currentSearch.page) + 1}`
                  };
                  fetchBreweries(newSearch);
                  setCurrentSearch(newSearch);
                }}
              />
            )}
          </div>
        </div>
        {activeBrewery ? (
          <BreweryMap
            brewery={activeBrewery}
            closeMap={() => setActiveBrewery(null)}
          />
        ) : null}
      </div>
    </section>
  );
};

export default App;
