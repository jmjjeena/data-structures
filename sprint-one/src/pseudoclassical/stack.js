var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};


Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  var removed = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  if (this.count > 0) {
  	this.count--;
  }
  return removed; 
}

Stack.prototype.size = function() {
    //get the length of contained data
    return this.count;
};

