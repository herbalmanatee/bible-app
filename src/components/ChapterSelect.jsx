import React from 'react';

let ChapterSelect = (props) => {
  //console.log(props);
  let chapters = props.chaptersObj;
  return (
    <div id="chapter-select">
      <h3>Select A Chapter</h3>
      <h5>{props.chaptersObj.book[0]}</h5>

      <div className="grid-container">
        {chapters.chapters.map((chap, index) => {
          return <button className="chapButton" onClick={()=>{
                  props.onChapterSelect(chapters, chap["number"], 1)}}
                  key={index}
                  className='grid-item'>
                  {chap["number"]}
                </button>
        })}
      </div>

    </div>
  );
}
export default ChapterSelect;

// {version: chapters.version, book: chapters.book[1], num: chap["number"] }