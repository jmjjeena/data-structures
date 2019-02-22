var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;

  someInstance.enqueue = function(value) {
  //add value to back of queue
  storage[count] = value;
  count++;
  return storage[count];
  };

  someInstance.dequeue = function() {
  //remove value from front of queue
  for (var key in storage) {
    var dequeued = storage[key];
    delete storage[key];
      break; 
    }
    return dequeued;
  };

  someInstance.size = function() {
  //length of queue
  var keyCount = 0;
    for (var key in storage) {
     if (storage[key]) {
      keyCount++;
      }
    }
    return keyCount;
  };

  return someInstance;
};


