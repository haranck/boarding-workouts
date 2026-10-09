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
    convertToBST(){
        let values = []
        function inOrder(node){
            if(node){
                inOrder(node.left)
                values.push(node.data)
                inOrder(node.right)
            }
        }
        inOrder(this.root)
        values.sort((a,b)=>a-b)
        console.log(values)
        let index = 0
        function createbst(node){
            if(node){
                createbst(node.left)
                node.data = values[index]
                index++
                createbst(node.right) 
            }
        }
        createbst(this.root)
    }
}

const tree = new BinaryTree();

tree.insert(5);
tree.insert(1);
tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(4);
tree.insert(7);

console.log("Binary Tree");
tree.levelOrder();

console.log("BST");
tree.convertToBST()
////////