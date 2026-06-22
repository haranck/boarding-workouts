class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        for (let adjacent of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacent);
        }
        delete this.adjacencyList[vertex];
    }
    print() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, " -> " + [...this.adjacencyList[vertex]]);
        }
    }
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return;
        visited.add(start);
        console.log(start);
        for (let neighbour of this.adjacencyList[start]) {
            if (!visited.has(neighbour)) {
                this.dfs(neighbour, visited);
            }
        }
    }
    bfs(start) {
        let visited = new Set();
        let queue = [start];
        visited.add(start);
        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
            for (let neighbour of this.adjacencyList[vertex]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
    clone() {
        let clone = new Graph();
        let visited = new Set();

        const dfs = (vertex) => {
            if (visited.has(vertex)) return;
            visited.add(vertex);
            clone.addVertex(vertex);
            for (let neighbour of this.adjacencyList[vertex]) {
                clone.addVertex(neighbour);
                clone.addEdge(neighbour, vertex);
                if (!visited.has(neighbour)) {
                    dfs(neighbour);
                }
            }
        };

        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }
        return clone;
    }
    detectCycle(vertex, visited, parent) {
        visited.add(vertex);
        for (let neighbour of this.adjacencyList[vertex]) {
            if (!visited.has(neighbour)) {
                if (this.detectCycle(neighbour, visited, vertex)) {
                    return true;
                }
            } else if (neighbour !== parent) {
                return true;
            }
        }
        return false;
    }
    hasCycle() {
        let visited = new Set();
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                if (this.detectCycle(vertex, visited, null)) {
                    return true;
                }
            }
        }
        return false;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");

console.log("dfs traversal");
g.dfs("A");
console.log("bfs traversal");
g.bfs("A");

console.log("clone graph");
const cloneGraph = g.clone();
cloneGraph.print();

console.log("has Cycle ? : ", g.hasCycle());

console.log(g.adjacencyList);

// console.log('hasEdge ',g.hasEdge("A","B"))

g.print();

// shortest path 
