var Queue = function() {
	var instance = {
		front: 0,
		back: 0,
		storage: {}
	};

	_.extend(instance, queueMethods);

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

