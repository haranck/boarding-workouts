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
    min(node = node.left) {
        if (!node.left) return node.data;
        return this.min(node.left);
    }
    delete(value) {
        if (!this.search(this.root, value)) {
            console.log("Value not found");
            return;
        }
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (!node) return;
        if (node.data > value) {
            node.left = this.deleteNode(node.left, value);
        } else if (node.data < value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (!node.right && !node.left) return null;
            if (!node.right) return node.left;
            if (!node.left) return node.right;

            let min = this.min(node.right);
            node.data = min;
            node.right = this.deleteNode(node.right, min);
        }
        return node;
    }
    height(node = this.root) {
        if (!node) return 0;
        let left = this.height(node.left);
        let right = this.height(node.right);
        return Math.max(left, right) + 1;
    }
    leftHeight() {
        if (!this.root || !this.root.left) return 0;
        return this.height(this.root.left);
    }
    sum(node = this.root) {
        if (!node) return 0;
        return this.sum(node.left) + this.sum(node.right) + node.data;
    }
    leftSum() {
        if (!this.root || !this.root.left) return 0;
        return this.sum(this.root.left);
    }
    countNode(node = this.root) {
        if (!node) return 0;
        return this.countNode(node.left) + this.countNode(node.right) + 1;
    }
    depth(node = this.root) {
        if (!node) return 0;
        let d = 0;
        while (node) {
            d++;
            node = node.left;
        }
        return d;
    }
    isPerfect() {
        let depth = this.depth();
        let totalNode = this.countNode();
        return totalNode === Math.pow(2, depth) - 1;
    }
    countOfLeafNodes(node = this.root) {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;
        return (
            this.countOfLeafNodes(node.left) + this.countOfLeafNodes(node.right)
        );
    }
    sumOfLeafNodes(node = this.root) {
        if (!node) return 0;
        if (!node.left && !node.right) return node.data;
        return this.sumOfLeafNodes(node.left) + this.sumOfLeafNodes(node.right);
    }
    sumOfLeftLeafNodes() {
        if (!this.root || !this.root.left) return 0;
        return this.sumOfLeafNodes(this.root.left);
    }
    maxDepth(node = this.root) {
        if (!node) return 0;
        let left = this.maxDepth(node.left);
        let right = this.maxDepth(node.right);
        return Math.max(left, right) + 1;
    }
    isValidBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.data > max || node.data < min) return false;
        return (
            this.isValidBST(node.left, min, node.data) &&
            this.isValidBST(node.right, node.data, max)
        );
    }
    kthSmallest(k) {
        let result = null;
        let count = 0;
        function inOrder(node) {
            if (!node || count >= k) return;
            inOrder(node.left);
            count++;
            if (count === k) {
                result = node.data;
                return;
            }
            inOrder(node.right);
        }
        inOrder(this.root);
        return result;
    }
    kthLargest(k) {
        let result = null;
        let count = 0;
        function inOrder(node) {
            if (!node || count >= k) return;
            inOrder(node.right);
            count++;
            if (count === k) {
                result = node.data;
                return;
            }
            inOrder(node.left);
        }
        inOrder(this.root);
        return result;
    }
    deleteKthLargest(k) {
        let result = null;
        let count = 0;
        function inOrder(node) {
            if (!node || count >= k) return;
            inOrder(node.right);
            count++;
            if (count === k) {
                result = node.data;
                return;
            }
            inOrder(node.left);
        }
        inOrder(this.root);
        if (result !== null) {
            this.delete(result);
            return result;
        }
    }
    deleteSecondLargest() {
        const value = this.kthLargest(2);
        if (value === null) {
            console.log("Tree doesnt have second largest");
            return;
        }
        this.delete(value);
    }
    printSpecificLevel(level, node = this.root) {
        if (!node) return;
        if (level === 0) {
            console.log(node.data);
            return;
        }
        this.printSpecificLevel(level - 1, node.left);
        this.printSpecificLevel(level - 1, node.right);
    }
    printLastTwoLevel() {
        let height = this.height();
        this.printSpecificLevel(height - 2);
        this.printSpecificLevel(height - 1);
    }
    sumSpecificLevel(level, node = this.root) {
        if (!node) return 0;
        let sum = 0;
        if (level === 0) {
            sum += node.data;
            return sum;
        }
        return (
            this.sumSpecificLevel(level - 1, node.left) +
            this.sumSpecificLevel(level - 1, node.right)
        );
    }
    sumOfLastTwoLevel() {
        let height = this.height();
        return (
            this.sumSpecificLevel(height - 2) +
            this.sumSpecificLevel(height - 1)
        );
    }

    levelOrder() {
        let queue = [];
        queue.push(this.root);
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
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(12);
tree.insert(8);
tree.insert(7);
tree.insert(14);

// console.log("Level Order")
// tree.levelOrder()
// console.log("PreOrder")
// tree.preOrder()
// console.log("PostOrder")
// tree.postOrder()

console.log("InOrder");
tree.inOrder();
tree.delete(111);
console.log("after delete");
tree.inOrder();
console.log("Sum:", tree.sum());
console.log("Left Sum:", tree.leftSum());
console.log("Height:", tree.height());
console.log("Left Height:", tree.leftHeight());
console.log("Count Nodes:", tree.countNode());
console.log("Leaf Nodes:", tree.countOfLeafNodes());
console.log("Leaf Sum:", tree.sumOfLeafNodes());
console.log("Left Leaf Sum:", tree.sumOfLeftLeafNodes());
console.log("Max Depth:", tree.maxDepth());
console.log("Depth:", tree.depth());
console.log("Valid BST:", tree.isValidBST());
console.log("Perfect Tree:", tree.isPerfect());
console.log("Kth Smallest", tree.kthSmallest(1));
console.log("Kth Largest", tree.kthLargest(1));

tree.printLastTwoLevel();
console.log("sumOfLastTwoLevel :", tree.sumOfLastTwoLevel());

// tree.deleteKthLargest(1)
// tree.deleteSecondLargest()
// tree.inOrder()

//         10
//        /  \
//       9    11
//      /       \
//     8         12
//    /            \
//   7              14
