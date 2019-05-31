import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

const BreweryMap = ({ brewery, closeMap }) => {
  const breweryLocation = {
    center: {
      lat: parseFloat(brewery.latitude),
      lng: parseFloat(brewery.longitude)
    },
    zoom: 12
  };

  const coordsAvailable =
    !breweryLocation.center.lat || !breweryLocation.center.lng ? false : true;

  const { name, street, city, state, postal_code } = brewery;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeMap} />
      <div className="modal-content">
        <header className="modal-card-head">
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={closeMap}
          />
          <h3 className="title is-3">{name}</h3>
          <p className="subtitle">{`${street}, ${city}, ${state} ${postal_code}`}</p>
        </header>
        {coordsAvailable ? (
          <div style={{ height: "70vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: `${env.REACT_APP_GOOGLE_MAP_API_KEY}`
              }}
              center={breweryLocation.center}
              zoom={breweryLocation.zoom}
            >
              <MapMarker
                lat={breweryLocation.center.lat}
                lng={breweryLocation.center.lng}
              />
            </GoogleMapReact>
          </div>
        ) : (
          <div className="modal-card-body">
            <p>Sorry, the map is not available for this brewery.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreweryMap;
