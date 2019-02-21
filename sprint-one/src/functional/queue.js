var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // stores data into storage
      storage[count] = value;
        count++;
    
  };

  someInstance.dequeue = function() {
    // subtracts data from storage
   var first = Object.keys(storage)[0];
   var popped = storage[first];
   delete storage[first];
   return popped;
   if(count !== 0) {count --;}
 
  };

  someInstance.size = function() {
    //get the length of contained data
    return Object.keys(storage).length;
  };

  return someInstance;
};
