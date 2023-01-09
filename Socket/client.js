const net = require('net');

const client = new net.Socket();

client.connect(8080, 'localhost', () => {
  console.log('Connected to server');

  client.write('Hello, server!');
  client.write('This is a message from the client');
  client.write('This is another message from the client');
});

client.on('data', (data) => {
  console.log(`Data received from server: ${data}`);
});

client.on('close', () => {
  console.log('Connection closed');
});
