class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.last = 0;
  }

  enqueue(value) {
    this.storage[this.last] = value;
    this.last++;
  }

  dequeue() {
    // subtracts data from storage
    var first = Object.keys(this.storage)[0];
    var popped = this.storage[first];
    delete this.storage[first];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
