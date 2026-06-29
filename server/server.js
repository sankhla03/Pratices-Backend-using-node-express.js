const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('../NPm/logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {}

// Initialize object
const myEmitter = new Emitter();

const Port = process.env.PORT || 3500; 
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(Port, () => console.log(`Server running
  on port ${Port}`));