import React from 'react';

let SearchData = (props) => {

  // if(props.data.length === 0) {
  //   return(<div></div>)
  // }
  return (
    <div id="search-data">
      {props.data.map((dataObj, index) => {
        return (
          <div key={index} className="search-result">
            <h4>{dataObj.title}</h4>
            <p>{dataObj.preview}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchData;