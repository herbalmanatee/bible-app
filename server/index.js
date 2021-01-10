const express = require('express');
const db = require('../db');
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );
const app = express();
const port = process.env.PORT || 8080;
// const API_KEY = require('../api.js');
const apiRequests = require('./apiRequests');
// // console.log(process.env.;
app.use(express.static('dist'));
app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.get('/', (req, res) => {
  res.sendStatus(200);
})

//gets bibles data from api and returns data to VersionsForm to be rendered
app.get('/bibleForm', (req, res) => {
  console.log('here');
  apiRequests.getBibleVersionsData((err, data)=> {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})


// $.get({
//   url: `https://api.biblia.com/v1/bible/find?key=${API_KEY.API_KEY}`,
//   dataType: 'json',
//   err: (err) => {
//     console.log(err);
//     res.sendStatus(404);
//   },
//   success: (data) => {
//     let resData = data["bibles"];
//     res.sendStatus(200);
//   }
// })