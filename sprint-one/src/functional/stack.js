var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // {1: value} - > after push - >
  // {2: value, 1: value}
  // - > after pop - > {1: value}
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // stores data into storage
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    // subtracts data from storage
    var popped = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return popped;
  };

  someInstance.size = function() {
    //get the length of contained data
    return Object.keys(storage).length;
  };

  return someInstance;
};
