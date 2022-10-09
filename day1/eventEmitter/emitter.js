const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


eventEmitter.on('start',(answer,answer2)=>{
    console.log("the event has started");
    console.log(`this here is where the answer is ${answer} and the answer 2 is ${answer2}`)
})


eventEmitter.emit('start',200,300);