function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  greet('John', function() {
    console.log('The callback function was called!');
  });
  