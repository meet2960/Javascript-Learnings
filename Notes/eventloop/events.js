const EventEmitter = require("events");
const http = require("http");
// const myEmitter = new EventEmitter();

// * another method of more abstaraction to create our own class which extends the EventEmitter class
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();
// * This are the events we are subscribed to the event
// * This simply means we are listening for a particular event to be fired and then the passed callback function will run
// * the below two are the obsorvers, they wait until it emits the newSale event
myEmitter.on("newSale", () => {
  console.log("There was a new Sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer Name: JavaScript");
});

myEmitter.on("newSale", (value) => {
  console.log(`Items Left ${value}`);
});

// * We can also pass arguments to the EventListners by passing them as a additional argument in the emitter
// * Below one is a object that will emit a event
myEmitter.emit("newSale", 9); // means calling the newSale event

// * ------------------------------------------------------------------------------------

// * Small Web Server using HTTP Module
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("Another Received");
});

server.on("close", () => {
  console.log("Server is Closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for Requests");
});
