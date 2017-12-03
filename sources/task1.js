'use strict';

const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('event1', (data) => {
  console.log(data);
});

ee.emit('event1', 'Hello data!');
