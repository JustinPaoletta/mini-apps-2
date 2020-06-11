const express = require('express');
const host = 'localhost';
const port = 8200;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

server.listen(port, (error) => {
  if (error) {
    console.log('Could not connect to Server', error);
  } else {
    console.log(`Project running on http://${host}:${port}`);
  }
});

server.use(express.static('./public'));
