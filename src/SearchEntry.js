import React, { useState } from 'react';

function SearchEntry(props) {

    const [typeTheme, setTypeTheme] = useState('');
    const [type, setType] = useState('');
    const placeType = props.placeType;
    let city, country, region, place, placeTheme;

    if (props.region) {
      region = <span className="dest-search__region">{props.region}, </span>
    }

    if (props.country) {
      country = <span className="dest-search__country">{props.country}</span>
    }

    if (props.city) {
      city = <span className="dest-search__city">{props.city}, </span>
    }

    switch(props.placeType) {

      case 'A':
        place = 'Airport';
        placeTheme = 'red';
      break;

      case 'C':
        place = 'City';
        placeTheme = 'blue';
      break;

      case 'T':
        place = 'Station';
        placeTheme = 'grey';
      break;
    }


  return (
      <li>
        <div className={"dest-search__result " +  placeTheme}>
          <div className="dest-search__type">
            <p>{ place }</p>
          </div>
          <div className="dest-search__place">
            <p className="dest-search__placename">{props.name}</p>
            <p className="dest-search__location">{ city } { region }{ country }</p>
          </div>
        </div>
      </li>
  );
}

export default SearchEntry;