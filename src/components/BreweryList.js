import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { MAX_PER_CALL } from "../vars";

// Components
import BreweryCard from "./BreweryCard";

const renderBreweries = (breweries, breweryClicked) => {
  const breweryCards = breweries.map((brewery, index) => {
    return (
      <BreweryCard
        key={brewery.id}
        listNumber={index + 1}
        brewery={brewery}
        onClickBrewery={() => breweryClicked(brewery)}
      />
    );
  });

  return breweryCards;
};

const BreweryList = ({
  breweries,
  breweryClicked,
  loadMoreClicked,
  loading
}) => {
  return (
    <>
      {renderBreweries(breweries, breweryClicked)}
      {loading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          size="9x"
          style={{ display: "block", color: "#ca6014", margin: "auto" }}
          spin
        />
      ) : null}
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
