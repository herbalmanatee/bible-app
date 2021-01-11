const { JSDOM } = require('jsdom');
const { window } = new JSDOM( "" );
const $ = require('jquery')( window );
require('dotenv').config();

//functions that perform apiRequests
let getBibleVerisonsData = (cb) => {
  $.get({
    url: `https://api.biblia.com/v1/bible/find?key=${process.env.BIBLIA_KEY}`,
    error: (err) => {
      cb(err);
    },
    success: (data) => {
      let versionsData = (data["bibles"]);
      getBibleBooksData((err, data) => {
        if (err) {
          cb(err)
        } else {
          cb(null, [versionsData, data])
        }
      })
      //res.send(dataObj);
    }
  });
}

let getBibleBooksData = (cb) => {
  $.get({
    url: 'https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books?include-chapters=true&include-chapters-and-sections=true',
    beforeSend: (xhr) => {xhr.setRequestHeader('api-key', process.env.APIBIBLE_KEY);},
    error: (err) => {
      cb(err)
    },
    success: (data) => {
      let bookDataObj = data["data"];
      cb(null, bookDataObj);
    }
  });
}

let getChapterHTML = (chapter, cb) => {
  $.get({
    url: `https://api.biblia.com/v1/bible/content/${chapter.version}.html?passage=${chapter.book + chapter.num}&style=fullyFormatted&key=${process.env.BIBLIA_KEY}`,
    dataType: 'html',
    err: (err) => {
      cb(err);
    },
    success: (data) => {
      cb(null, data)
    }
  })
}

module.exports = {
  getBibleVersionsData: getBibleVerisonsData,
  getBibleBooksData: getBibleBooksData,
  getChapterHTML: getChapterHTML
}