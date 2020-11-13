let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hi, Alan!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Alan!');
});

app.get('/goodbye/silly', (req, res) => {
  res.send('This is getting ridiculous.');
});

app.listen(8000);