const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use(express.static('dist'));
app.listen(port, ()=> {
  console.log(`listening on ${port}`);
});

app.get('/', (req, res) => {
  res.sendStatus(200);
})

