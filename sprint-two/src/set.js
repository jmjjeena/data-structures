var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[this.counter] = item;
  
  this.counter++;
};

setPrototype.contains = function(item) {
  for (var key in this._storage)   {
    if(this._storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  
  for (var i in this._storage){
    if (this._storage[i] === item){
      delete this._storage[i];
      this.conter--;
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
