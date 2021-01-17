const { JSDOM } = require('jsdom');
const { window } = new JSDOM( "" );
const $ = require('jquery')( window );
require('dotenv').config();

//functions that perform apiRequests
let getBibleVersionsData = () => {
  return (
    $.get({
      url: `https://api.biblia.com/v1/bible/find?key=${process.env.BIBLIA_KEY}`,
      success: (data) => {
        let versionsData = (data["bibles"]);
        return versionsData;
      }
    })
  )
}


let getBibleBooksData = () => {
  return (
    $.get({
      url: 'https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books?include-chapters=true&include-chapters-and-sections=true',
      beforeSend: (xhr) => {xhr.setRequestHeader('api-key', process.env.APIBIBLE_KEY);},
      success: (data) => {
        let bookDataObj = data["data"];
        return bookDataObj;
      }
    })
  )
}

let getChapterHTML = (chapter) => {
  return (
    $.get({
      url: `https://api.biblia.com/v1/bible/content/${chapter.version}.html?passage=${chapter.book + chapter.num}&style=fullyFormatted&key=${process.env.BIBLIA_KEY}`,
      dataType: 'html',
      success: (data) => {
        return data;
      }
    })
  );
}

let getSearchData = (queryObj) => {

  return (
    $.get({
      url: `https://api.biblia.com/v1/bible/search/${queryObj.version}.js?query=${queryObj.query}&mode=verse&passages=${queryObj.book}&start=0&limit=20&key=${process.env.BIBLIA_KEY}`,
      dataType: 'json',
      success: (data) => {
        return data;
      }
    })
  );
}

module.exports = {
  getBibleVersionsData: getBibleVersionsData,
  getBibleBooksData: getBibleBooksData,
  getChapterHTML: getChapterHTML,
  getSearchData: getSearchData
}