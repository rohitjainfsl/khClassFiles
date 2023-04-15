import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on('message', (msg) => {
    console.log("You have a new message: "+ msg)
})


setTimeout(() => {emitter.emit('message', 'Mere Karan Arjun Ayenge')}, 1000)
setTimeout(() => {emitter.emit('message', 'Apna Time Ayega')}, 1000)

// emitter.once("greeting", (name) => {
//   console.log(`Hello, ${name}!`);
// });

// emitter.emit("greeting", "Burhan")
// emitter.emit("greeting", "Rohit")


