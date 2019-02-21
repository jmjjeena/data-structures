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
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    delete storage[count];
    count--;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};
