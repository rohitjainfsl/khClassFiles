import process from 'process'

// console.log(process.argv)


// process.env.NODE_ENV = "production"

// console.log(process.env)


// process.on('SIGALRM' ,)


// console.log(process.memoryUsage())
// resident set size

// console.log(`Memory usage: ${JSON.stringify(process.memoryUsage())}`);


// process.title = 'Hello World'
// console.log(process.title)


// Event Loop:

// It is a built in loop, starts automatically when node starts, runs every few milliseconds.
//Checks for any pending events.
//It checks in the event queue and executes them in FIFO order.

// Node is a single threaded environment, operates non-blocking I/O operations 




import fs from 'fs'

// Read a file asynchronously
fs.readFile('hello2.txt', 'utf8', (err, data) => {
  console.log('Raman');
});

// Schedule a timer to fire after 1 second
setTimeout(() => {
  console.log('Geeta');
}, 100);

// Schedule an immediate callback to fire after the current event
setImmediate(() => {
  console.log('Seeta');
});

console.log('Shyam');

