
// Binary Search Tree Implementation BST

class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {    
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      this.insertNode(node.left, newNode);
    } else {
      if (!node.right) {
        node.right = newNode;
        return;
      }
      this.insertNode(node.right, newNode);
    }
  }
  
  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.right);
      this.postOrder(node.left);
      console.log(node.data);
    }
  }
  preOrder(node = this.root){
    if(node){
        console.log(node.data)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(12);
tree.insert(8);

tree.postOrder();
tree.preOrder()

//     10
//    /  \
//   9    11
//  /       \
// 8         12