import React from 'react';

function Form() {
  return (
    <div className="dest-search">
      <form>
        <h2 className="dest-search__title">Where are you going?</h2>
        <label htmlFor="dest-search__location">Pick-up Location</label>
        <input type="text" name="dest-search__location" id="dest-search__location" />
        <button className="dest-search__submit">Search</button>
      </form>
    </div>
  );
}

export default Form;