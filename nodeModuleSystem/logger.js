const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
  mylogfile(message) {
    console.log(message);
  
    //To raise an event
    this.emit("messageLogged", {id: 1})
  }
}

module.exports = Logger;