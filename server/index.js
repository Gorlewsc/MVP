const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/characters', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
  }).then(result => res.send(result.data))
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})