const net = require('net');

const server = net.createServer((socket) => {
  console.log('A client has connected');

  socket.on('data', (data) => {
    console.log(`Data received from client: ${data}`);
  });

  socket.on('end', () => {
    console.log('A client has disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
