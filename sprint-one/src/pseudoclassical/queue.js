var Queue = function() {
	this.front = 0;
	this.back = 0;
	this.storage = {};
 };

Queue.prototype.enqueue = function(value){
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function(){
  if(this.front <= this.back){
    var toDequeue = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return toDequeue;
  }
};

Queue.prototype.size = function(){
	if (this.back - this.front < 0) {
		return 0;
	} else {
		return this.back - this.front;
	}
};

