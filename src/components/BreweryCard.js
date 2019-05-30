import React, { PureComponent } from "react";

class BreweryCard extends PureComponent {
  render() {
    const {
      name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
      website_url
    } = this.props.brewery;

    return (
      <div className="box brewery-card" onClick={this.props.onClickBrewery}>
        <div className="columns">
          <div className="column is-1">
            <span className="tag is-large">{this.props.listNumber}</span>
          </div>
          <div className="column">
            <h3 className="title is-3">{name}</h3>
            <h5 className="subtitle is-5 is-capitalized">{brewery_type}</h5>
            <p>{`${street}, ${city}, ${state} ${postal_code}`}</p>
            <p className="overflow-ellipsis">
              <a href={website_url}>{website_url}</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BreweryCard;
