const events = require('events');

const eventEmitter = new events.EventEmitter();

const wakeUp = () => {
  console.log('Wake up!');
};

const brushTeeth = () => {
  console.log('Brush teeth!');
};

const eatBreakfast = () => {
  console.log('Eat breakfast!');
};
const Breakfast = () => {
    console.log('before settieout--->');
    setTimeout(()=>
    {console.log('morning');},5000)
  };
eventEmitter.on('morningRoutine', Breakfast);
eventEmitter.on('morningRoutine', wakeUp);
eventEmitter.on('morningRoutine', brushTeeth);
eventEmitter.on('morningRoutine', eatBreakfast);

eventEmitter.emit('morningRoutine');
