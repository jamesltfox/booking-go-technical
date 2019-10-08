import React from 'react';
import SearchEntry from './SearchEntry';

function SearchResults(props) {

  const docs = props.entries.results.docs;

  let listItems = docs.map((doc) => {
    return <SearchEntry key={doc.index} name={doc.name} placeType={doc.placeType} city={doc.city} region={doc.region} country={doc.country} />
  })

  return (
      <div className="dest-search__results"> 
        <ul>
          { listItems }
        </ul>
      </div>
  );

}

export default SearchResults;