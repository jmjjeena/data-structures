var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.count = 0;
  stackInstance.storage = {};
   
  _.extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var removed = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  if (this.count > 0) {
  	this.count--;
  }
  return removed; 
};

stackMethods.size = function() {
    //get the length of contained data
    return this.count;
};


