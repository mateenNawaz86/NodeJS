import url from "url";
import { EventEmitter } from "events";

const myURL = new URL("https://mateen.org");
myURL.pathname = "/fuuast/bscs";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
console.log(myURL.hostname);

// Events Emmiter in nodejs
class MyEmitter extends EventEmitter {}

// create a new object using class
const myEmitter = new MyEmitter();

// create an event which is triggered when we wanna triggered it
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

console.log("Evente triggered is below there");
myEmitter.emit("event");

// self event code is here
myEmitter.on("openSite", () => {
  console.log("Please open the site immedialty!");
  setTimeout(() => {
    console.log("Open the site is urgent! It's an remainder for you");
  }, 2000);
});

console.log("Before the event the triggered of openSite");
// this event is triggered after the two seconds
myEmitter.emit("openSite");
console.log("After the event the triggered of openSite");
