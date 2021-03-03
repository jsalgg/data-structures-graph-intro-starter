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
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
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
