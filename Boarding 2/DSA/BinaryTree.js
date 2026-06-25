class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }
        let queue = [this.root];
        while (queue.length) {
            let current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }
    levelOrder() {
        let queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            console.log(current.data);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    insertBST(node, value) {
        if (!node) return new TreeNode(value);

        if (node.data > value) {
            node.left = this.insertBST(node.left, value);
        } else {
            node.right = this.insertBST(node.right, value);
        }
        return node;
    }
    toBST() {
        let bst = new BinaryTree();

        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();

            bst.root = this.insertBST(bst.root, current.data);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return bst;
    }
}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log("Binary Tree");
tree.levelOrder();

console.log("BST");
const bst  = tree.toBST()
bst.levelOrder()