var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  // subtracts data from storage
  var first = Object.keys(this.storage)[0];
  var popped = this.storage[first];
  delete this.storage[first];
  return popped;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

