
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = {};
  }

  addVertex(vertex) {
    // Code goes here ...
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    //check first if adj list at src value (current node) if that has edges already
    if(!this.adjList[srcValue]) this.adjList.addVertex(srcValue);
    if(!this.adjList[destValue]) this.adjList.addVertex(destValue);

    const src = this.adjList[srcValue];
    const dest = this.adjList[destValue];
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

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









