class Node{
  constructor(val){
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DLL{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBeginning(val){
    const node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
      this.size++;
    }else{
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  insertAtEnd(val){
    const node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
      this.size++;
    }else{
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.size++;
    }
  }

  print(){
    const arr = [];
    let curr = this.head;
    while(curr){
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }

  // temp1 n1 n2 temp2
  // temp1 n2 n1 temp2

  swap(n1, n2){
    let temp1 = n1.prev;
    let temp2 = n2.next;
    if(temp1){
      temp1.next = n2;
    }else{
      this.head = n2;
    }
    n2.next = n1;
    n1.next = temp2;
    if(temp2){
      temp2.prev = n1;
    }else{
      this.tail = n1;
    }
    n1.prev = n2;
    n2.prev = temp1;
  }

  swapAdjacentEven(){
    let curr = this.head;
    while(curr && curr.next){
      if(curr.val % 2 === 0 && curr.next.val % 2 === 0){
        this.swap(curr, curr.next);
        continue;
      }
      curr = curr.next;
    }
  }

  findMiddleAndSwap(){
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    this.swap(slow, slow.next)
  }

  getNodeAtPosition(index){
    if(index > Math.floor(this.size/2)){
      // from back
      let curr = this.tail;
      for(let i = this.size-1; i>index; i--){
        curr = curr.prev;
      }
      return curr;
    }else{
      // from front
      let curr = this.head;
      for(let i=0;i<index; i++){
        curr = curr.next;
      }
      return curr;
    }
  }

  reverseTraversal(){
    const arr = [];
    let curr = this.tail
    while(curr){
      arr.push(curr.val);
      curr = curr.prev
    }
    console.log(arr);
  }

  deleteFromBeginning(){
    let curr = this.head;
    let next = curr.next;
    this.head = next;
    curr.next = null;
    next.prev = null;
  }

  deleteFromEnd(){
    let curr = this.tail;
    let prev = curr.prev;
    this.tail = prev;
    prev.next = null;
    curr.prev = null;
  }

  reverse(){
    let curr = this.head;
    let prev = null;
    while(curr){
      let next = curr.next;
      curr.prev = next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

const dll = new DLL();
const arr = [1,2,4,6, 8, 7,8,9,10,12];
for(let val of arr){
  dll.insertAtEnd(val);
}
dll.print();
dll.swapAdjacentEven();
dll.print()
// dll.findMiddleAndSwap();
dll.print();
console.log(dll.getNodeAtPosition(8).val);
dll.reverseTraversal();
dll.deleteFromBeginning();
dll.deleteFromEnd();
dll.print();
dll.reverse();
dll.print();