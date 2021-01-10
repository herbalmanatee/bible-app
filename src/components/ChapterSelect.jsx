import React from 'react';

let ChapterSelect = (props) => {
  // console.log(props.chapters.length);
  console.log(props);
  return (
    <div>
      <h3>Select A Chapter</h3>
      <h5>{props.name}</h5>
      <div className="grid-container">
        {props.chapters.map((chap, index) => {
          return <button key={index} className={`grid-item ${chap["number"]}`}>{chap["number"]}</button>
        })}
      </div>
    </div>
  );
}
export default ChapterSelect;