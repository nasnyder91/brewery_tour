import React from "react";
import GoogleMapReact from "google-map-react";

const BreweryMap = ({ brewery }) => {
  const breweryLocation = {
    center: {
      lat: parseFloat(brewery.latitude),
      lng: parseFloat(brewery.longitude)
    },
    zoom: 12
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div style={{ height: "75vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP_API_KEY
            }}
            center={breweryLocation.center}
            zoom={breweryLocation.zoom}
          >
            <div
              className="box"
              lat={breweryLocation.center.lat}
              lng={breweryLocation.center.lng}
            >
              <p>{brewery.name}</p>
            </div>
          </GoogleMapReact>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default BreweryMap;
