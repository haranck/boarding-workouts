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