import React, {useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

function Form(props) {

  const [val, setVal] = useState('');
  const [data, setData] = useState('');
  const [errors, setErrors] = useState(false);
  const [charLen, setCharLen] = useState(false);
  let results

  const fetchResults = (query) => {
    
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      axios.get(query, {
        cancelToken: source.token
      })
      .then((response) => {

        switch(response.status) {

          case 200:
            setData(response.data);
          break;

          default:
            setErrors(true);
          break;
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Cancelled Request', error.message);
        } else {
          console.log(error.message);
        }
      });
  }

  const setQuery = (contentLength, val) => {
      // Make sure user has entered more than one character before processing request
      if (contentLength >= 2) {
        setCharLen(true);
        const query = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${val}`
        fetchResults(query);
      } else {
        setCharLen(false);
      }
  }

  // Handle Form submission
  const onSubmit = event => {
    const contentLength = val.length;
    setQuery(contentLength, val);
    return event.preventDefault();
  }

  // Handle on change of text box
  const onChange = event => {
    const contentLength = event.target.value.length;
    setVal(event.target.value);
    setQuery(contentLength, val);
  }
  
  // Conditionally render a search results component
  if (data && charLen) {
    results = <SearchResults entries={data} />
  } else {
    results = null;
  }

  return (
    <div className="dest-search">
      <form onSubmit={onSubmit}>
        <h2 className="dest-search__title">Where are you going?</h2>
        <div className="form-field">
          <label htmlFor="dest-search__location">Pick-up Location</label>
          <input type="text" autoComplete="off" required value={val} onChange={onChange} name="dest-search__location" placeholder="city, airport, station, region, district..." id="dest-search__location" />
        </div>
        <button className="btn btn__submit dest-search__submit" type="submit" aria-label="search for location">Search</button>
      </form>

      {results}
    </div>
  );
}

export default Form;