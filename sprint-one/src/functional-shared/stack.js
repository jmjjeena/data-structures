var Stack = function() {
  var instance = {
    count: 0,
    storage: {}
  }

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.count++;//1
    this.storage[this.count] = value;//0
    return this.storage[this.count];
    
  },

  pop: function() {
    var toDelete = this.storage[this.count];//1
    delete this.storage[this.count];
    this.count--;
    return toDelete;
  },

  size: function() {
    if (this.count < 0) {
      return 0
    } else {
      return this.count;
    }
  }
}



