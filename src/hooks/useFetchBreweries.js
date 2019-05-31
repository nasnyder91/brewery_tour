import { useState } from "react";
import axios from "axios";
import { MAX_PER_CALL } from "../vars";

const useFetchBreweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [loadingBreweries, setLoadingBreweries] = useState(false);

  const fetchBreweries = filters => {
    setLoadingBreweries(true);
    const searchParams = { per_page: MAX_PER_CALL };

    for (const filter of Object.keys(filters)) {
      if (filters[filter].length > 0) {
        searchParams[filter] = filters[filter].replace(" ", "_");
      }
    }

    axios
      .get("https://api.openbrewerydb.org/breweries", {
        params: searchParams
      })
      .then(response => {
        filters.page > 1
          ? setBreweries(breweries => breweries.concat(response.data))
          : setBreweries(response.data);
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
