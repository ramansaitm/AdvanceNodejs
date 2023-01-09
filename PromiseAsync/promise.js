var http =require('http')
function getData(url) {
    return new Promise((resolve, reject) => {
      const req = http.get(url, res => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error(`Status Code: ${res.statusCode}`));
        }
  
        let data = '';
  
        res.on('data', chunk => {
          data += chunk;
        });
  
        res.on('end', () => {
          resolve(data);
        });
      });
  
      req.on('error', reject);
    });
  }
  
  getData('http://www.google.com')
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
  