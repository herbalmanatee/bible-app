const express = require('express');
const db = require('../db');
const app = express();
const port = process.env.PORT || 8080;
// console.log(process.env.;
app.use(express.static('dist'));
app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.get('/', (req, res) => {
  res.sendStatus(200);
})

