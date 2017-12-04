'use strict';

const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('error', (err) => {
  if (err) throw err;
});

ee.emit('error', new Error('Error #1'));
