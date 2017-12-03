'use strict';

/* EventEmitter */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    const event = this.events[name] || [];
    this.events[name] = event;
    event.push(fn);
  }

  emit(name, ...data) {
    const event = this.events[name];
    if (event) event.forEach(fn => fn.apply(null, data));
  }
}

/* MyEmitter */
class MyEmitter extends EventEmitter {
  emit(...args) {
    if (args[0] !== '*') super.emit.apply(this, args);
    args.unshift('*');
    super.emit.apply(this, args);
  }
}

/* Usage */
const myEvent = new MyEmitter();

myEvent.on('event1', (data) => {
  console.log(`Something event: ${ data }`);
});

myEvent.on('*', (name, data) => {
  console.log(`Any event: ${ name } = ${ data }`);
});

myEvent.emit('event1', 'Hello data 2!');
myEvent.emit('*', { a: 5 });
