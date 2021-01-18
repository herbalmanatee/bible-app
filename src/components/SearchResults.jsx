import React from 'react';
import PropTypes from 'prop-types';

let SearchResults = (props) => {
  //conditional rendering for component
  if (!props.show) {
    return null;
  }

  return (
    <div id="search-data">
      <h4>{props.data.length} Results</h4>
      {props.data.map((dataObj, i) => {
        let chapter = dataObj.title.split(':')[0].split(' ');
        let chapterName = chapter.slice(0, chapter.length -1)
        let chapterQuery = {
          chapter: chapterName.join(' '),
          chapNum: chapter[chapter.length-1]
        }
        return (
          <div key={i} className="search-result">
            <h4>{dataObj.title}</h4>
            <button onClick={()=>{props.onChapterSelect(chapterQuery, true)}}id="result-button">Go to {chapter} </button>
            <p>{dataObj.preview}</p>
          </div>
        )
      })}
    </div>
  );
}

SearchResults.propTypes = {
  show: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  onChapterSelect: PropTypes.func.isRequired
}

export default SearchResults;