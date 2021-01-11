import React from 'react';
import ReactDOM from 'react-dom';

let ChapterText = (props) => {
  return (
  <div dangerouslySetInnerHTML={{__html: props.text}}>
  </div>
  )
}

export default ChapterText;
// {/*
//     <p>
//   <span lang="en-US">John 3</span> (LEB)
// </p>
// <p style={{"fontweight": "bold","fontfamily": "Arial","fontsize": "10pt","margintop": "12pt"}} lang="en-US">
//   A Meeting with Nicodemus
// </p> */}