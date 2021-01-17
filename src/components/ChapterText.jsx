import React from 'react';

let ChapterText = (props) => {
  let navElement;
  let chap = props.chapterInfo
  let navClick = props.navClick
  let id = 'text'

  //increment chapter for navigation buttons
  let incChap = (direction, array) => {
    if (direction) {
      array[1] = (array[1]*1 +1).toString();
      //console.log(array);
    } else {
      array[1] = (array[1]*1 -1).toString();
    }
    return array[1];
  }

  if (!props.text) {
    return(<div></div>);
    //navElement = <div></div>;
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
    {navElement}
    <div dangerouslySetInnerHTML={{__html: props.text}}></div><br></br>
    {navElement}
  </div>
  );
}


export default ChapterText;
