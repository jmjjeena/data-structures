/* eslint-disable space-before-blocks */
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = function(value) {
    // functional style
    //create new node with value

    var newNode = new Node(value);
    list.counter++;
    if (!list.head && !list.list){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //re-point head to next node
    var removed = list.head.value;
    list.head = list.head.next;
    if (list.counter > 0) {
      list.counter--;
    }
    return removed;
  };

  list.contains = function(target) {
    // declare current node
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      } 
      current = current.next;
    }
    return false;    
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 * For addToTail(), the time complexity is Constant O(1).
 * For removeHead(), the time complexity is Constant O(1).
 * For contains(), the time complexity is Linear O(n).
 */
var newlist = LinkedList();
newlist.addToTail(4);
newlist.addToTail(5);
console.log(newlist.head);