const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/index.html');
  });

  app.listen(3000, () => console.log('My first app listening on port 3000!, check http://localhost:3000/home '));
