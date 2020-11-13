let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hi, Alan!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

app.get('/blog', (req, res) => {
  res.send('Welcome to my blog.');
});

app.get('/about/silly', (req, res) => {
  res.send('This is getting ridiculous.');
});

app.listen(8000);