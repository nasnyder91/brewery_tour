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

  const { breweries, loadingBreweries, fetchBreweries } = useFetchBreweries();

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-one-quarter-desktop">
            <Search onSearch={fetchBreweries} />
          </div>
          <div className="column is-three-quarters-desktop">
            {loadingBreweries ? (
              <FontAwesomeIcon
                icon={faSpinner}
                size="9x"
                style={{ color: "green", margin: "auto" }}
                spin
              />
            ) : (
              <BreweryList
                breweries={breweries}
                breweryClicked={brewery => setActiveBrewery(brewery)}
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
