import React from 'react';
// import ChapterButton from './ChapterButton.jsx';
import PropTypes from 'prop-types';

let ChaptersForm = (props) => {
  if (props.chapters.length === 0) {
    return <div>NO CHAPTERS NOW</div>
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
  onChapterSelect: PropTypes.func.isRequired
}

export default ChaptersForm;