var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.last = 0;
  // queueInstance.first = 0;
  queueInstance.storage = {};

  _.extend(queueInstance, queueMethods);
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  // subtracts data from storage
  var first = Object.keys(this.storage)[0];
  var popped = this.storage[first];
  delete this.storage[first];
  return popped;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


