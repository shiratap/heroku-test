'use strict';

require('dotenv').config(); 
const express = require('express');



const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/hello', (req,res) => {
  res.status(200).send('hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }

  response.status(200).json(airplanes);
});

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
});

app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

app.listen(PORT, () => console.log(`listening on ${PORT}`))
