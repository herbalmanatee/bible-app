import React from 'react';

let SearchForm = (props) => {

  return(
    <div>
      <form className="form-item" id="search" onSubmit={(event)=>{props.onSubmit(event, document.getElementById("query").value)}}>
        <input id="query" type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;