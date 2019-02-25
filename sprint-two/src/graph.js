// Instantiate a new graph
var Graph = function() {
  this.vortexCount = 0;
  this.vertex = {};
  this.edge = {};
  this.edgeCount = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // console.log('count is now', this.vortexCount );
  this.vertex[this.vortexCount] = node;
  this.vortexCount++;
  // console.log('new node: ', node, 'vortex is now ', this.vertex);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.vertex) {
    if (this.vertex[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i in this.vertex) {
    if (this.vertex[i] === node) {
      delete this.vertex[i];
      this.vortexCount--;

      //chech how many  edges has this node, add to an array
      for (var key in this.edge) {
        if (this.edge[key][0] === node || this.edge[key][1] === node) {
          this.removeEdge(this.edge[key][0], this.edge[key][1]);
        }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  console.log(this.edge);
  for (var key in this.edge) {
    if (this.edge[key][0] === fromNode ) {
      if (this.edge[key][1] === toNode ) {
        return true;
      }
    } else if (this.edge[key][0] === toNode) {
      if (this.edge[key][1] === fromNode ) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[this.edgeCount] = [fromNode, toNode];
  console.log(this.edge);
  this.edgeCount++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.edge) {
    if (this.edge[key][0] === fromNode ) {
      if (this.edge[key][1] === toNode ) {
        delete this.edge[key];
      }
    } else if (this.edge[key][0] === toNode) {
      if (this.edge[key][1] === fromNode ) {
        delete this.edge[key];
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertex) {
    cb(this.vertex[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
