import { useState } from "react";
import axios from "axios";

const useFetchBreweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [loadingBreweries, setLoadingBreweries] = useState(false);

  const fetchBreweries = filters => {
    setLoadingBreweries(true);
    const searchParams = {};

    for (const filter of Object.keys(filters)) {
      if (filters[filter].length > 0) {
        searchParams[filter] = filters[filter];
      }
    }

    axios
      .get("https://api.openbrewerydb.org/breweries", {
        params: searchParams
      })
      .then(response => {
        setBreweries(response.data);
        setLoadingBreweries(false);
      });
  };

  return {
    fetchBreweries,
    loadingBreweries,
    breweries
  };
};

export default useFetchBreweries;
