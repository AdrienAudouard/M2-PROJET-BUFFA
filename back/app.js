const express = require('express');

const app = express();
const port = process.env.PORT || 5555;

app.listen(port);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

console.log(`Magic happens at http://localhost: ${port}`);
