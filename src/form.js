import React, {useState} from 'react';

function Form() {

  const [val, setVal] = useState('');

  const onChange = event => {
    const contentLength = event.target.length;
    setVal(event.target.value);

    // Make sure user has entered more than one character before processing request
    if (contentLength > 1) {

    }
  }

  return (
    <div className="dest-search">
      <form>
        <h2 className="dest-search__title">Where are you going?</h2>
        <div className="form-field">
          <label htmlFor="dest-search__location">Pick-up Location</label>
          <input type="text" autoComplete="off" value={val} onChange={onChange} name="dest-search__location" placeholder="city, airport, station, region, district..." id="dest-search__location" />
        </div>
        <button className="btn btn__submit dest-search__submit" type="submit" aria-label="search for location">Search</button>
      </form>
    </div>
  );
}

export default Form;