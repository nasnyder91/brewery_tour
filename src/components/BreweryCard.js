import React from "react";

const BreweryCard = props => {
  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url
  } = props.brewery;

  return (
    <div className="box brewery-card" onClick={props.onClickBrewery}>
      <h3 className="title is-3">{name}</h3>
      <h5 className="subtitle is-5 is-capitalized">{brewery_type}</h5>
      <p>{`${street}, ${city}, ${state} ${postal_code}`}</p>
      <p className="overflow-ellipsis">
        <a href={website_url}>{website_url}</a>
      </p>
    </div>
  );
};

export default BreweryCard;
