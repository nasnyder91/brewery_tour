import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const onMarkerClick = () => {};

const MapMarker = props => {
  return (
    <span
      className="fa-layers fa-fw map-marker"
      onClick={() => onMarkerClick(props)}
    >
      <FontAwesomeIcon
        icon={faMapMarker}
        size="5x"
        style={{ color: "green" }}
      />
      <FontAwesomeIcon
        icon={faBeer}
        size="2x"
        style={{ color: "yellow", marginLeft: "17px", marginBottom: "18px" }}
      />
    </span>
  );
};

export default MapMarker;
