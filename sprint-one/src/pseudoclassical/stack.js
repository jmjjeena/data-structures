var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
	this.count++;
	this.storage[this.count] = value;
	return this.storage[this.count];
};

Stack.prototype.pop = function() {
	var toPop = this.storage[this.count];
	delete this.storage[this.count];
	this.count--;
	return toPop;
};

Stack.prototype.size = function() {
	if (this.count < 0) {
		return 0;
	} else {
		return this.count;
	}
};

