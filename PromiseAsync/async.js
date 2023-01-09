async function foo() {
    console.log('Start');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('End');
  }
  
  foo();  // Output: "Start", wait 10 second, "End"
  