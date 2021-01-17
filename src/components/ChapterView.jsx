import React from 'react';
import PropTypes from 'prop-types';

let ChapterView = (props) => {
  let bookLength = props.bookLength;
  let chapterNum = props.chapterNum;
  let navElement;

  //conditional rendering for entire component
  if (!props.show) {
    return null
  }
  //conditional rendering for navigation buttons Prev/Next chapter
  if (chapterNum === 1) {
    navElement =
      <button
      onClick={()=> {props.onChapterSelect((chapterNum+1))}}>
      Next
      </button>
  } else if (chapterNum === bookLength) {
    navElement =
      <button
      onClick={()=> {props.onChapterSelect(chapterNum-1)}}>
      Prev
      </button>
  } else {
    navElement =
    <div>
      <button
        onClick={()=> {props.onChapterSelect(chapterNum-1)}}>
        Prev
        </button>
        <button
        onClick={()=> {props.onChapterSelect(chapterNum+1)}}>
        Next
        </button>
    </div>
  }

  return (
    <div id="text">
      {navElement}
      <div dangerouslySetInnerHTML={{__html: props.text}}></div>
      {navElement}
    </div>
  )
}

ChapterView.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  chapterNum: PropTypes.number.isRequired,
  bookLength: PropTypes.number.isRequired,
  onChapterSelect: PropTypes.func.isRequired
}

export default ChapterView;