import React from 'react';
import PropTypes from 'prop-types';

let ChaptersForm = (props) => {

  if(!props.show) {
    return null;
  }

  return(
    <div className="grid-container">
      {props.chapters.map((chapter, i)=> {
        return <button
                  key={i}
                  className="grid-item"
                  onClick={()=> {props.onChapterSelect(chapter.number)}}
                  >
                {chapter.number}</button>
      })}
    </div>
  )
}

ChaptersForm.propTypes = {
  chapters: PropTypes.array.isRequired,
  onChapterSelect: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default ChaptersForm;