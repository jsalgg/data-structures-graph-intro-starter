class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = {};
  }
  /*
  a: b, c
  b: a
  c: a
  */

  addVertex(vertex) {
    // Code goes here ...
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    //check first if adj list at src value (current node) if that has edges already
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    const src = this.adjList[srcValue];
    const dest = this.adjList[destValue];

    src.push(destValue);
    dest.push(srcValue);
    // console.log(this.adjList);
  }

  buildGraph(edges) {
    // Code goes here ...
    //input is array of arrays
    //list of edges, go through each array at a time
    //we're going to use the values inside the array as parameters for addEdges

    edges.forEach(subArr => {
      const src = subArr[0];
      const dest = subArr[1];
      this.addEdges(src, dest);
    });

    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
    const queue = [];
    let visited = [];
    visited.push(startingVertex);
    queue.push(startingVertex);
    while(!queue) {
    //dequeue the queue
    let current = queue.shift();
    //set that removed ele to a var
    visited.push(current);

    for(node in this.adjList) {
      if(!visited.includes(node)){
        visited.push(node);
        queue.push(node);
      }
    }
    //add that element to our visited array
    
    //loop through all the nodes in our adjList
    //inside loop, if (node that we're currently iterating through !visited) { push into visited and then queue it}

    }

    return visited;
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    // Code goes here ...
  }
}

module.exports = {
  Graph,
};
