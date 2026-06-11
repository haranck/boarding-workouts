//min heap

class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    remove() {
        if (this.heap.length === 0) return;
        let min = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }
        return min;
    }
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] < this.heap[parent]) {

            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
	heapifyDown(index){
		let smallest = index
		let left = 2 * index + 1
		let right = 2 * index + 2

		if(left < this.heap.length && this.heap[smallest] > this.heap[left] ){
			smallest = left
		}
		if(right < this.heap.length && this.heap[smallest] > this.heap[right]){
			smallest = right
		}

		if(smallest !== index){
			[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
			this.heapifyDown(smallest)
		}

	}
    print() {
        console.log("heap : ", this.heap);
    }
}

const min = new MinHeap()

min.insert(10)
min.insert(50)
min.insert(60)
min.insert(30)
min.insert(5)
min.remove()
min.print()
