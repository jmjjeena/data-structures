var Queue = function() {
	var instance = Object.create(queueMethods);
		instance.front = 0;
		instance.back = 0;
		instance.storage = {};

	return instance;
 };

 var queueMethods = {
 	enqueue : function(value) {
 		this.storage[this.back] = value;
 		this.back++;
 	},

 	dequeue : function() {
 		if(this.front <= this.back) {
 			var toDelete = this.storage[this.front];
 			delete this.storage[this.front];
 			this.front++;
 			return toDelete;
 		}
 	},

 	size : function() {
 		if (this.back - this.front < 0) {
 			return 0;
 		} else {
 			return this.back - this.front;
 		}
 	}
 };



