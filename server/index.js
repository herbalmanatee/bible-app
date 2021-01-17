const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const apiRequests = require('./apiRequests');


app.use(express.static('dist'));
app.use(bodyParser.json());

app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.get('/', (req, res) => {
  res.sendStatus(200);
})

//gets bibles data from api and returns data to VersionsForm to be rendered
app.get('/bibleForm', (req, res) => {
  apiRequests.getBibleVersionsData()
    .then((bibleVersionsData)=> {return bibleVersionsData})
    .then((bibleVersionsData) => {
      return apiRequests.getBibleBooksData()
        .then((versionsData) => {return([bibleVersionsData, versionsData])})
    })
    .then(dataArr => {
      res.send(dataArr)
    })
    .catch(err => {throw(err)});
})

app.get('/chapter/:version/:book/:num', (req, res) => {
  let chapter = req.params;

  apiRequests.getChapterHTML(chapter)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {throw(err)})

})

app.get('/search/:version/:query/:book', (req, res) => {
  let queryObj = req.params;

  apiRequests.getSearchData(queryObj)
    .then(data => {res.send(data)})
    .catch(err => {throw(err)})
})
