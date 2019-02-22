class Stack {
	constructor() {
	this.storage = {};
 	this.count = 0;	
	}	
  

  push(value) {
	this.count++;
	this.storage[this.count] = value;
	return this.storage[this.count];
	};

  pop() {
	var toPop = this.storage[this.count];
	delete this.storage[this.count];
	this.count--;
	return toPop;
	};

  size() {
	if (this.count < 0) {
		return 0;
	} else {
		return this.count;
	}
  };
};
