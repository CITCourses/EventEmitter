'use strict';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEvent = new MyEmitter();

myEvent.on('event1', (data) => {
  console.log(data);
});

myEvent.emit('event1', 'Hello data 2!');
