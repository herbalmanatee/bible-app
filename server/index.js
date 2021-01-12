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
  apiRequests.getBibleVersionsData((err, data)=> {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})

app.get('/chapter/:version/:book/:num', (req, res) => {
  let chapter = req.params;
  apiRequests.getChapterHTML(chapter, (err, data)=> {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})
