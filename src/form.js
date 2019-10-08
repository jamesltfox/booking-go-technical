import React from 'react';

function Form() {
  return (
    <div className="dest-search">
      <form>
        <h2 className="dest-search__title">Where are you going?</h2>
        <div className="form-field">
          <label htmlFor="dest-search__location">Pick-up Location</label>
          <input type="text" autoComplete="off" name="dest-search__location" placeholder="city, airport, station, region, district..." id="dest-search__location" />
        </div>
        <button className="btn btn__submit dest-search__submit">Search</button>
      </form>
    </div>
  );
}

export default Form;