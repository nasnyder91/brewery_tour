import React from "react";

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

const BreweryList = ({ breweries, breweryClicked }) => {
  return <>{renderBreweries(breweries, breweryClicked)}</>;
};

export default BreweryList;