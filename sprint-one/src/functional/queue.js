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
  };

  someInstance.dequeue = function() {
  //remove value from front of queue
  for (var key in storage) {
    delete storage[key];
      break; 
    }
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
