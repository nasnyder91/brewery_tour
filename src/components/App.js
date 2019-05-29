import React, { useState, useEffect } from "react";

// Components
import SearchBar from "./SearchBar";
import BreweryList from "./BreweryList";
import BreweryMap from "./BreweryMap";

// Hooks
import useFetchBreweries from "../hooks/useFetchBreweries";

// const openBreweryMap = brewery => {
//   return <BreweryMap brewery={brewery} />;
// };

const App = () => {
  const [activeBrewery, setActiveBrewery] = useState(null);

  useEffect(() => {
    console.log(activeBrewery);
  });

  const { breweries, loadingBreweries, fetchBreweries } = useFetchBreweries();

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-one-fifth-desktop">
            <SearchBar onSearch={fetchBreweries} />
          </div>
          <div className="column is-four-fifths-desktop">
            {loadingBreweries ? (
              <h1 className="is-size-1">Loading</h1>
            ) : (
              <BreweryList
                breweries={breweries}
                breweryClicked={brewery => setActiveBrewery(brewery)}
              />
            )}
          </div>
        </div>
        {activeBrewery ? <BreweryMap brewery={activeBrewery} /> : null}
      </div>
    </section>
  );
};

export default App;
