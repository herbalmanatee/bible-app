import React from 'react';

let ChapterText = (props) => {
  let navElement;
  let chap = props.chapterInfo
  let navClick = props.navClick

  //increment chapter for navigation buttons
  let incChap = (direction, array) => {
    if (direction) {
      array[1] = (array[1]*1 +1).toString();
      console.log(array);
    } else {
      array[1] = (array[1]*1 -1).toString();
    }
    return array[1];
  }

  if (!props.text) {
    navElement = <div></div>;
  } else {
    if(props.chapterInfo[1] === '1') {
      navElement = <div><button onClick={()=>{navClick(chap[0], incChap(1, chap))}} className="nav-button">Next</button></div>
    } else {
      navElement = <div>
        <button className="nav-button"
          onClick={()=>{navClick(chap[0], incChap(0, chap))}}>
          Prev
        </button>
        <button className="nav-button"
          onClick={()=>{navClick(chap[0], incChap(1, chap))}}>
          Next
        </button>
        </div>
    }
  }

  return (
  <div id="text" >
    <div dangerouslySetInnerHTML={{__html: props.text}}></div>
    {navElement}
  </div>
  )
}

export default ChapterText;

// BIBLIA_KEY = 7edbae6fd20d3652d82df675832f0464
// APIBIBLE_KEY = e0ad6ace7e5d51147b7b937b37473399