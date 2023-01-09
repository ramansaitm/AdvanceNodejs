process.on('message', (msg) => {
    // Do something with the request
   // console.log('Worker received request:', msg);
  
    // Send a response back to the parent process
    process.send({ id: process.pid });
  });
  