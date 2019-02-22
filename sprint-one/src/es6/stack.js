class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0;
  	this.storage = {};
  }

  push(value) {
	  this.storage[this.count] = value;
	  this.count++;
  };

  pop() {
	  var removed = this.storage[this.count - 1];
	  delete this.storage[this.count - 1];
	  if (this.count > 0) {
	  	this.count--;
	  };
	  return removed; 
	};

	size() {
    //get the length of contained data
    return this.count;
	};

}