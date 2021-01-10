const { JSDOM } = require('jsdom');
const { window } = new JSDOM( "" );
const $ = require('jquery')( window );
const API_KEY = require('../api.js');

//functions that perform apiRequests

let getBibleVerisonsData = (cb) => {
  $.get({
    url: `https://api.biblia.com/v1/bible/find?key=${API_KEY.bibliaKey}`,
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
    beforeSend: (xhr) => {xhr.setRequestHeader('api-key', API_KEY.apiBibleKey);},
    error: (err) => {
      cb(err)
    },
    success: (data) => {
      let bookDataObj = data["data"];
      cb(null, bookDataObj);
    }
  });
}

module.exports = {
  getBibleVersionsData: getBibleVerisonsData,
  getBibleBooksData: getBibleBooksData
}