const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5555;
const cache = {};

app.listen(port);

app.use(express.static(`${__dirname}/public`));

app.use(cors());

app.get('/api/*', (req, res) => {
  const newURL = req.url.substring(4);

  if (cache[newURL]) {
    console.log('Using cache for: ' + newURL);
    return res.status(200).send(cache[newURL]);
  }

  console.log('Calling API for: ' + newURL);

  axios.get('https://wasabi.i3s.unice.fr' + newURL).then((response) => {
    if (response.status < 400) {
      cache[newURL] = response.data;
    }

    res.status(response.status).send(response.data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

console.log(`Magic happens at http://localhost:${port}`);
