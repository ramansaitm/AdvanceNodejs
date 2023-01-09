const fs = require('fs');

const data = 'Hello, world  Hello!';

fs.writeFile('/data.txt', data, 'utf-8', (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('File write completed');
});
