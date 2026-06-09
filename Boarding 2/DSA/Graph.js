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
        this.adjacencyList[vertex1].add(vertex1);
        this.adjacencyList[vertex2].add(vertex2);
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
    hey() {
        console.log("hai" + "hai");
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
}
