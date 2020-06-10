const express = require('express');
const host = 'localhost';
const port = 7000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.listen(port, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});



server.use(express.static('./public'));
