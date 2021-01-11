import React from 'react';

let ChapterText = (props) => {
  return (
  <div id="text" dangerouslySetInnerHTML={{__html: props.text}}>
  </div>
  )
}

export default ChapterText;

// BIBLIA_KEY = 7edbae6fd20d3652d82df675832f0464
// APIBIBLE_KEY = e0ad6ace7e5d51147b7b937b37473399