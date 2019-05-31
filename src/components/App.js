import React, { useState } from "react";

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
    <>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item title is-size-2 is-size-1-tablet main-title" style={{ fontWeight: '900' }}>
            Brewery Tour
          </h1>
        </div>
      </div>
    </nav>
    <section className="section">
      <div className="container">

        <div className="columns is-desktop">
          <div className="column is-one-quarter-desktop search-container">
            <Search
              onSearch={inputs => {
                fetchBreweries(inputs);
                setCurrentSearch(inputs);
              }}
            />
          </div>
          <div className="column is-three-quarters-desktop">
            <BreweryList
              breweries={breweries}
              loading={loadingBreweries}
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
    </>
  );
};

export default App;
