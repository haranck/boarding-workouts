// Reverse the strings to their own place using stack

function reverseInPlace(str){
    let stack = []
    
    for(let char of str){
        stack.push(char)
    }
    
    for(let i = 0 ; i < str.length ; i++){
        str[i] = stack.pop()
    }
    return str
}
console.log(reverseInPlace('haran'.split('')))


// Remove duplicates in string using stack

const str = 'abbaca'

function removeDuplicates(str){
    let stack = []

    for(let char of str){
        if(stack.length && stack[stack.length - 1] === char){
            stack.pop()
        }else{
            stack.push(char)
        }
    }

    return stack.join('')

}
console.log(removeDuplicates(str))


// sort a stack using temporary stack

function sortStack(stack){
    let tempStack = []
    while(stack.length){
        let temp = stack.pop()
        while(tempStack.length > 0 && tempStack[tempStack.length -1 ] > temp){
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    return tempStack
}

console.log(sortStack([8,6,4,7,5,2,1,3]))


// stack using queue

class Stack {
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    push(value){
        while(this.q1.length){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(value)
        while(this.q2.length){
            this.q1.push(this.q2.shift())
        }
    }
    pop(){
        return this.q1.shift()
    }
    peek(){
        return this.q1[0]
    }
    print(){
        console.log("stack",this.q1)
    }
}

const stack  = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()

//Queue using stack


class Queue {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    front(){
        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    print(){
        console.log('Queue ',[...this.stack2].concat(this.stack1))
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

q.print()



// stack using linked list 

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinkedList {
    constructor(){
        this.head = null
    }
    push(value){
        let newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
    }
    pop(){
        if(this.head === null) return 'stack is Empty'
        let poped = this.head.value
        this.head = this.head.next
        return poped
    }
    peek(){
        return this.head.value
    }
    print(){
        let current = this.head
        let result = ''
        while(current){
            result+= current.value + " -> "
            current = current.next
        }
        result+=null
        console.log(result)
    }
}

const stackLL = new StackLinkedList()
stackLL.push(1)
stackLL.push(2)
stackLL.push(3)
stackLL.push(4)

stackLL.print()


//reverse string using stack

const string = "hello good night"
 
function reverseString(str){
    let splits = str.split(' ')
    let stack = []
    for(let word of splits){
        stack.push(word)
    }
    let result = ''
    while(stack.length){
        let current = stack.pop()
        result += " " +current
    }
    return result.trim()

}
console.log(reverseString(string))