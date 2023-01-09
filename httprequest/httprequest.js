const http = require('http');

http.get('http://www.example.com', (response) => {
  let data = Buffer.alloc(0);

  response.on('data', (chunk) => {
    data = Buffer.concat([data, chunk]);
  });

  response.on('end', () => {
    console.log(data.toString());
  });
});
