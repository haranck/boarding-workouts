// runOnce fn

function runOnce(fn){
    let called = false
    return function (){
        if(!called){
            called = true
            return fn()
        }
    }
}

const greet = runOnce(()=>{
    console.log('Hello Haran')
})

greet()

greet()

/////////////////


