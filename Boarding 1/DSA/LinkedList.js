// create linked list and remove duplicate
// remove odd value nodes from linked list object - could not do it outside class.
// insert a node to sorted linked list
// Merge two linked list and sort it merge sort or other
// sum of first 2 and last 2 values in linkedList
// Delete kth element from Linked List from the end — practical
// Find and delete 3rd element from end of linked list
// delete k th from end of a linked list — practical

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
      newNode.next = this.head
      this.head = newNode
      return 
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
    if(position === 0 ){
        this.head = this.head.next
        return
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
      current =  current.next
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
        let nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    }
    this.head = prev
  }
  merge(otherList){
    if(!this.head){
        this.head = otherList.head
        return
    }
    let current = this.head
    while(current.next){
        current = current.next
    }
    current.next = otherList.head
  }
  removeOdd(){
    if(!this.head){
        console.log('list is empty')
        return
    }
    while(this.head && this.head.value % 2 !== 0){
        this.head = this.head.next
    }
    let current = this.head
    while(current && current.next){
        if(current.next.value % 2 !== 0){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
  }
  removeDuplicates(){
    
  }
  print() {
    let current = this.head
    while(current){
        console.log(current.value)
        current = current.next
    }
  }
}

const ll = new LinkedList()
ll.addFirst(1)
ll.addFirst(2)
ll.addFirst(3)
ll.addFirst(4)
ll.addFirst(2)
ll.addFirst(1)

// ll.removeOdd()
ll.print()