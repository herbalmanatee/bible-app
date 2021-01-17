const $ = require('jquery');

let getBiblesList = () => {
  return $.get({
    url: '/bibleForm'
  })
  .then((data) => {
    return data;
  })
  .catch(err => alert(err));
}


let getSearchResults = (versionAbbrv, processedQuery, book) => {
  return ($.get({
    url: `/search/${versionAbbrv}/${processedQuery}/${book}`,
    dataType: 'json'
  })
  .then((data) => {
    return data.results;
  })
  .catch(err =>{alert(err)})
  );
}


let getChapterInfo = (chapObj, chapNum) => {
  return ($.get({
    url: `/chapter/${chapObj.version}/${chapObj.book[1]}/${chapNum}`,
    dataType: 'html'
  })
  .then((data) => {
    return data
  })
  .catch(err => {alert(err)})
  );
}



module.exports = {
  getSearchResults: getSearchResults,
  getChapterInfo: getChapterInfo,
  getBiblesList: getBiblesList
}