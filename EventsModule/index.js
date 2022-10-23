import eventEmitter from "events";

const newEvent = new eventEmitter();

// Fire a new created event
newEvent.on("myName", (sc, msg) => {
  console.log(`Your event is occured! with ${sc} status code and ${msg}`);
});

// Listen the newly created event
newEvent.emit("myName", 200, "OK");
