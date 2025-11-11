// This file sends actions to the store
// It works like a messenger in the Flux system

import { EventEmitter } from "events";

class Dispatcher extends EventEmitter {
  // This function sends out actions to whoever is listening
  dispatch(action) {
    this.emit("action", action);
  }
}

export default new Dispatcher();
