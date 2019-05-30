import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { MAX_PER_CALL } from "../vars";

// Components
import BreweryCard from "./BreweryCard";

const renderBreweries = (breweries, breweryClicked) => {
  const breweryCards = breweries.map(brewery => {
    return (
      <BreweryCard
        key={brewery.id}
        brewery={brewery}
        onClickBrewery={() => breweryClicked(brewery)}
      />
    );
  });

  return breweryCards;
};

const BreweryList = ({ breweries, breweryClicked, loadMoreClicked }) => {
  return (
    <>
      {renderBreweries(breweries, breweryClicked)}
      {breweries.length > 0 && breweries.length % MAX_PER_CALL === 0 ? (
        <button
          className="button"
          style={{ display: "block", margin: "0 auto" }}
          onClick={loadMoreClicked}
        >
          <FontAwesomeIcon icon={faChevronDown} />
          &nbsp;Load More
        </button>
      ) : null}
    </>
  );
};

export default BreweryList;
