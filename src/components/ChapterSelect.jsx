import React from 'react';
const $ = require('jquery');

let ChapterSelect = (props) => {

  let chapters = props.chaptersObj;
  let book = props.chaptersObj.book[0]
  return (
    <div id="chapter-select">
      <h3>Select A Chapter</h3>
      <form onSubmit={(event) => {
          props.onSearch(event, document.getElementById('chap-query').value, book)}}>
        <input id="chap-query"type="text"></input>
        <button type="submit">Search {book}</button>
      </form>
      <h5>{book}</h5>

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