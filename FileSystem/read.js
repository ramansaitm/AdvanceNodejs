const fs = require('fs');

fs.readFile('/data.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
