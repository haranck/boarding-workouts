class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(value) {
    let newNode = new Node(value);
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(value) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  addAt(position, value) {
    if (position < 0) {
      console.log("invalid position");
      return;
    }
    let newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current !== null && position > i) {
      prev = current;
      current = current.next;
      i++;
    }
    if (current === null) {
      console.log("position out of range");
      return;
    }

    prev.next = newNode;
    newNode.next = current;
  }
  removeFirst() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeAt(position) {
    if (position < 0) {
      console.log("invalid positoin");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current !== null && position > i) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = current.next;
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
  makeCircular() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = this.head;
  }
  isCircular() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
  mergeLists(otherList) {
    if (!this.head) {
      this.head = otherList.head;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = otherList.head;
  }
  removeOdd() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    while (this.head && this.head.value % 2 !== 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current && current.next) {
      if (current.next.value % 2 !== 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  removeDuplicates() {
    if (!this.head) return;
    let seen = new Set();
    let current = this.head;
    let prev = null;

    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }

  getMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  sortedMerge(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.value < l2.value) {
      l1.next = this.sortedMerge(l1.next, l2);
      return l1;
    } else {
      l2.next = this.sortedMerge(l1, l2.next);
      return l2;
    }
  }

  mergeSort(head = this.head) {
    if (!head || !head.next) return head;

    const mid = this.getMiddle(head);
    // leftHead = head  --left head is main head mid fine with find middle and right head is mid's next value
    const rightHead = mid.next;

    mid.next = null;

    const left = this.mergeSort(head);
    const right = this.mergeSort(rightHead);

    return this.sortedMerge(left, right);
  }

  sort() {
    this.head = this.mergeSort(this.head);
  }

  // sum of first 2 and last 2 values in linkedList

  sumFirstLastTwo() {
    if (!this.head) return 0;
    let firstSum = 0;
    let lastSum = 0;

    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    current = this.head;
    let index = 0;
    while (current) {
      if (index < 2) {
        firstSum += current.value;
      }

      if (index >= count - 2) {
        lastSum += current.value;
      }
      current = current.next;
      index++;
    }
    return firstSum + lastSum;
  }
  deleteKthFromLast(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    let target = length - k;

    if (target === 0) {
      this.head = this.head.next;
      return;
    }

    current = this.head;
    for (let i = 0; i < target - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  delete3rdFromLast() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    let target = length - 3;
    current = this.head;
    for (let i = 0; i < target - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  addPairsSumBetweenPairs() {
    let current = this.head;
    while (current && current.next) {
      let sum = current.value + current.next.value;
      let newNode = new Node(sum);

      newNode.next = current.next;
      current.next = newNode;

      current = newNode.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.addFirst(1);
ll.addFirst(2);
ll.addFirst(3);
ll.addFirst(4);
ll.addFirst(2);


const l2 = new LinkedList();
l2.addFirst(10);
l2.addFirst(20);
l2.addFirst(30);
l2.addFirst(40);
l2.addFirst(20);
l2.addFirst(10);

ll.print();
console.log("middle ", ll.findMiddle());

ll.mergeLists(l2);
ll.sort();
ll.print();

console.log("middle ", ll.findMiddle());
console.log("first and last two sum ", ll.sumFirstLastTwo());

// ll.deleteKthFromLast(2)
// ll.delete3rdFromLast();
ll.addPairsSumBetweenPairs()
ll.print();
