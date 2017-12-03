'use strict';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  emit(...args) {
    super.emit.apply(this, args);
    args.unshift('*');
    super.emit.apply(this, args);
  }
}

const myEvent = new MyEmitter();

myEvent.on('event1', (data) => {
  console.log(`Something event: ${ data }`);
});

myEvent.on('*', (name, data) => {
  console.log(`Any event: ${ name } = ${ data }`);
});

myEvent.emit('event1', 'Hello data 2!');
myEvent.emit('*', { a: 5 });