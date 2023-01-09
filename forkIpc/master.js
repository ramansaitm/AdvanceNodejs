const http = require('http');
const { fork } = require('child_process');
var CircularJSON = require('circular-json')
const server = http.createServer((req, res) => {
  // Create 4 worker processes
  for (let i = 0; i < 4; i++) {
    const worker = fork('worker.js');
    worker.on('message', (msg) => {
      // Send the response to the client
      console.log(`Worker ${msg.id} handled the request`);
    });
    // Send the request to the worker
    worker.send(CircularJSON.stringify(req));
  }

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
