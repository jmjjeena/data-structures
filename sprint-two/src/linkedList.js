var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = function(value) {
    //create new node with  value 

    var newNode = new Node(value);
    this.counter++;
    if(!this.head && !this.list){
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    //point head and tail to the value 
    // becuase there is only one node
     
    // if added another new node 
    // head will be the first node itself and
    // tail will be pointed to the new node
  };

  list.removeHead = function() {
    //re-point head to new node
    var removed = this.head.value;
    this.head = this.head.next;
    if (this.counter > 0) {
      this.counter--
    }
    return removed;
  };

  list.contains = function(target) {
    // declare current node
    var current = this.head;
    // get value head
    if ( current.value === target) {
      return true;
    } else {
      while(current.next !== null) {
        // check target value eauals to the value of head
        // if not 
        //while current not equal not next 
        // next equal to null
      }
    }
    //return false
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
 */
