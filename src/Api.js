import axios from "axios";

function fetchBreweries(filters, callback) {
  const searchParams = {};

  for (const filter of Object.keys(filters)) {
    if (filters[filter].length > 0) {
      searchParams[filter] = filters[filter];
    }
  }

  console.log(searchParams);

  axios
    .get("https://api.openbrewerydb.org/breweries", {
      params: searchParams
    })
    .then(response => {
      console.log(response.data);
    });

  return response.data;
}

export default fetchBreweries;
