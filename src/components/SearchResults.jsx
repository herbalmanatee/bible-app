import React from 'react';
import PropTypes from 'prop-types';

let SearchResults = (props) => {
  //conditional rendering for component
  if (!props.show) {
    return null;
  }

  return (
    <div id="search-data">
      {props.data.map((dataObj, i) => {
        return (
          <div key={i} className="search-result">
            <h4>{dataObj.title}</h4>
            <p>{dataObj.preview}</p>
          </div>
        )
      })}
    </div>
  );
}

SearchResults.propTypes = {
  show: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default SearchResults;