class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Map();
        }
    }
    addEdges(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].set(vertex2, weight);
        this.adjacencyList[vertex2].set(vertex1, weight);
    }
    hasEdges(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }
    removeEdges(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        for (let adjacent of this.adjacencyList[vertex].keys()) {
            this.removeEdges(adjacent, vertex);
        }
        delete this.adjacencyList[vertex];
    }
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return;
        console.log(start);
        visited.add(start);
        for (let neighbour of this.adjacencyList[start].keys()) {
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
            for (let neighbour of this.adjacencyList[vertex].keys()) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }

    print() {
        for (let vertex in this.adjacencyList) {
            let edges = [];
            for (let [adj, weight] of this.adjacencyList[vertex]) {
                edges.push(`(${adj},${weight})`);
            }
            console.log(vertex + "->" + edges.join(" , "));
        }
    }
}

const g = new WeightedGraph();

g.addEdges("A", "B", 10);
g.addEdges("A", "C", 20);
g.addEdges("B", "D", 30);
g.addEdges("C", "D", 40);

// g.print();
console.log();
g.bfs("A");
console.log();
g.dfs("A");
