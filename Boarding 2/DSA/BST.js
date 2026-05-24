// Binary Search Tree Implementation BST

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
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
  search(node = this.root, value) {
    if (!node) return false;
    if (node.data === value) {
      return true;
    } else if (node.data > value) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
  preOrder(node = this.root) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(12);
tree.insert(8);

console.log("inorder ");
tree.inorder();

console.log("postorder ");
tree.postOrder();

console.log("preorder ");
tree.preOrder();

console.log("search", tree.search(10));

// console.log("Height:", tree.height());
// console.log("Left Height:", tree.leftHeight());

//     10
//    /  \
//   9    11
//  /       \
// 8         12
