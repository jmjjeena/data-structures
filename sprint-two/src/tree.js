var Tree = function(value) {
var newTree = {};
newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // want to apply this value as the new value of the newTree obj
  // push the child to the children array
  //create new instance
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //take target input
  //search data structure for target
  //return true if found
  //return false else
  //
  //search main node 
  //if not found, enter recursive function
  //for loop through children 
  //if not found, for loop through their children
  //else return false
  if (this.value === target) {
    return true;
  }
    // var searchTree = function(node){
      for(var i = 0; i < this.children.length; i++) {
        if (this.children[i].value === target) {
                return true;
        }
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    // }
    
    return false;
  

  // var searchTree = function(node) {
  //   for (var i = 0; i < node.length; i++) {
  //     if (node[i].value.contains(target)) {
  //       return true;
  //     }
  //   }
  //   searchTree(this.children);
  //   return false;
  // }                 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
